// import { useEffect } from "react"
import { Html5QrcodeScanType, Html5QrcodeScanner } from "html5-qrcode";
import { AdminSideBar, Table } from "../components"
import { Button, Card, Typography } from "@material-tailwind/react"
import QRCode from "qrcode.react";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify"
import moment from "moment/moment";

function AdminMarkAttendance() {
  const qrId = 'qrId'
  const userDetails = JSON.parse(localStorage.getItem('userDetails'))
  const tokenDetails = JSON.parse(localStorage.getItem('token'))
  const [showQRCode, setShowQRCode] = useState(false);
  const [students, setStudents] = useState([]);
  const [qrCode, setQrCode] = useState();
  const [studentId, setStudentId] = useState()
  const status = useRef()

  const scan = () => {
    const config = {
      fps: 10,
      qrbox: 250,
      disableFlip: false,
      supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA]
    };

    const scanner = new Html5QrcodeScanner(qrId, config);

    scanner.render(async (data) => {

      status.current = toast.info('Please wait...', { autoClose: false })
      try {
        const response = await fetch("https://result-checker-g7zf.onrender.com/api/attendance/signIn", {
          method: "POST", // Specify the HTTP method as POST
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + tokenDetails.token // Set the content type to JSON
          },
          body: JSON.stringify({
            qrCodeData: data // Use meaningful variable names
          })
        });

        if (response.status === 200) {
          toast.success("Attendance updated");
          toast.dismiss(status.current)
          scanner.clear();
        } else {
          toast.error("Error while updating");
        }
      } catch (error) {
        console.error(error);
        toast.error("An error occurred");
        toast.dismiss(status.current)
      } finally {
        scanner.clear();
        toast.dismiss(status.current)
      }
    });

  };

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


  const generateCode = async (userId) => {
    setStudentId(userId)
    window.scrollTo(0, 0);
    status.current = toast.info('Please wait...', { autoClose: false })
    try {
      const response = await fetch(`https://result-checker-g7zf.onrender.com/api/users/generateQRCode/${userId}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + tokenDetails.token
        }
      });

      const getter = await response.json();
      const splitter = getter.data.split(' ');
      const getData = splitter[1].toString().slice(5);

      setQrCode(getData.slice(0, -1))
      setShowQRCode(true)

      toast.dismiss(status.current)
    } catch (error) {
      toast.error('Failed to generate code')
      toast.dismiss(status.current)
    }
  }

  const handleDownloadQRCode = () => {
    // Create a data URI for the QR code image

    // Create a temporary anchor element to trigger the download
    const a = document.createElement('a');
    a.href = `${qrCode}`;
    a.download = 'qrcode.png';
    a.click();
  };

  const handleAllUsers = async () => {
    const response = await fetch(`https://result-checker-g7zf.onrender.com/api/users/all/student`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + tokenDetails.token
      }
    });

    const dt = await response.json()
    setStudents(dt.data)
  }

  useEffect(() => {
    handleAllUsers()
  }, [])



  return (
    <div>
      <div className="flex">
        <AdminSideBar />
        <div className="w-full">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5 m-10 lg:ml-28">
            {/* <Button onClick={generateQrcode} size="lg" color="green">Generate Qrcode</Button> */}
            <div className="flex justify-center lg:mt-18">
              {showQRCode ? <img src={qrCode} width={230} /> : (
                <img width={230} src="https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9hZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
              )}

            </div>
            {/* <a href="" download={true}> */}
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

            <Button onClick={scan} size="lg" color="green">Scan Qrcode</Button>
            {/* </a> */}
          </div>
          <ToastContainer />

          <div className="ml-96 w-96" id={qrId}></div>
        </div>
      </div>


      <div className="ml-80 h-full flex justify-center items-center mt-10">
        <Card className="h-full w-full overflow-scroll">
          <h1 className="flex items-center justify-center my-6 text-2xl font-semibold">All Students</h1>
          <table className="w-full min-w-max table-auto text-center">
            <thead>
              <tr>
                {/* <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    User Id
                  </Typography>
                </th> */}
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Username
                  </Typography>
                </th>

                {/* <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Attendance
                  </Typography>
                </th> */}

                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Date Registered
                  </Typography>
                </th>

                {/* <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    TimeIn
                  </Typography>
                </th> */}

                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Actions
                  </Typography>
                </th>

                {/* <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    TimeOut
                  </Typography>
                </th> */}
              </tr>
            </thead>
            <tbody>
              {students.length > 0 ? (
                students.map((student, index) => (
                  <tr key={index} className="even:bg-blue-gray-50/50">
                    {/* <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {student._id}
                      </Typography>
                    </td> */}
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {student.username}
                      </Typography>
                    </td>
                    {/* <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        Present
                      </Typography>
                    </td> */}
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {moment(student.createdAt).format("DD MMMM, YYYY")}
                      </Typography>
                    </td>
                    {/* <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        8:10
                      </Typography>
                    </td> */}
                    <td className="p-4">
                      <Button onClick={() => generateCode(student._id)}>Generate Code</Button>
                    </td>
                  </tr>
                ))
              ) : null}

            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}

export default AdminMarkAttendance
