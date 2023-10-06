// import { useEffect } from "react"
import { Html5QrcodeScanType, Html5QrcodeScanner } from "html5-qrcode";
import { AdminSideBar } from "../components"
import { Button } from "@material-tailwind/react"
import QRCode from "qrcode.react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify"

function AdminMarkAttendance() {
  const qrId = 'qrId'

  const scan = () => {
    const config = {
      fps: 10,
      qrbox: 250,
      disableFlip: false,
      supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA]
    };

    const scanner = new Html5QrcodeScanner(qrId, config);

    scanner.render(async (userId) => {
      try {
        const response = await fetch("https://result-checker-g7zf.onrender.com/api/attendance/signIn", {
          method: "GET", // Specify the HTTP method as POST
          mode: "cors",
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
          body: JSON.stringify({
            qrCodeData: userId // Use meaningful variable names
          })
        });

        if (response.status === 200) {
          toast.success("Attendance updated");
        } else {
          toast.error("Error while updating");
        }
      } catch (error) {
        console.error(error);
        toast.error("An error occurred");
      } finally {
        scanner.clear();
      }
    });

  };

  const userDetails = JSON.parse(localStorage.getItem('userDetails'))
  const [showQRCode, setShowQRCode] = useState(false);
  const [data, setData] = useState('');

  const generateQrcode = async () => {
    const response = await fetch("https://result-checker-g7zf.onrender.com/api/users/generateQRCode", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer" + userDetails.token
      }
    })
    console.log(userDetails.token)
    console.log("RESPONSE", response);
    setData(generateQrcode);
    setShowQRCode(true);
  }

  // useEffect(() => {
  //   generateQrcode()
  // })

  const handleDownloadQRCode = () => {
    // Create a data URI for the QR code image
    const qrCodeDataURL = document.querySelector('canvas').toDataURL('image/png');

    // Create a temporary anchor element to trigger the download
    const a = document.createElement('a');
    a.href = qrCodeDataURL;
    a.download = 'qrcode.png';
    a.click();
  };

  return (
    <div>
      <div className="flex">
        <AdminSideBar />
        <div className="w-full">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5 m-10 lg:ml-28">
            <Button onClick={generateQrcode} size="lg" color="green">Generate Qrcode</Button>
            <div className="flex justify-center lg:mt-18">
              {showQRCode && (
                <div>
                  <a href="" download={true}>
                    <QRCode value={data} size={250} />
                  </a>
                </div>
              )}
            </div>
            <Button onClick={handleDownloadQRCode} variant="gradient" className="flex items-center mr-2 gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
              Download Code
            </Button>
          </div>
          <ToastContainer />
          <div className="w-full">
            <div className="my-5" id={qrId}></div>
            <div className="flex justify-center items-center lg:ml-20 mt-14">
              <Button onClick={scan} size="lg" color="green">Scan Qrcode</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminMarkAttendance
