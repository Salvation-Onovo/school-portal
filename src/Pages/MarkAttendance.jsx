import { SideBar } from "../components"
import { Html5QrcodeScanType, Html5QrcodeScanner } from 'html5-qrcode'
import { Button } from "@material-tailwind/react"
import { toast } from "react-toastify";

function MarkAttendance() {
  const userDetails = JSON.parse(localStorage.getItem('userDetails'))

    const qrId = 'qrId'

  // eslint-disable-next-line no-unused-vars
  const scan = () => {
    const config = {
      fps: 10,
      qrbox: 250,
      disableFlip: false,
      supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA]

    }
    const scanner = new Html5QrcodeScanner(qrId, config);
    scanner.render = async (data) => {
      if (data == userDetails.userId) {
        try{
      await fetch("https://result-checker-g7zf.onrender.com/api/attendance/signIn", {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
             
              qrCodeData: data
            
            })
          })

          toast.info('Updated');
        }catch{
          toast.error('User does not exist')

    }

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
  }

  return (
    <div>
      <div className="flex">
        <SideBar />
        <div className="w-full">
            <div className="my-5" id={qrId}></div>
          <div className="flex justify-center items-center mt-14">
            <Button onClick={scan} size="lg" color="green">Scan Qrcode</Button>
          </div>
        </div>
      </div>
    </div>
  )
}}
}

export default MarkAttendance

