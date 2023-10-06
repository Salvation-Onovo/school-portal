/* eslint-disable react/prop-types */
import { Button, Card, Typography } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
 
const TABLE_HEAD = ["FirstName", "LastName", "UserName", "Time In", "Time Out" , "GenerateQRcode" ];

const test = [
  {firstname : "Kelvin",
   lastname : "Chijioke" ,
    username : "klvncj" ,
     TimeOut : "20-12-2002" ,
      TimeIn : "25-12-2023" , 
      token : "bsdsbdkvksbhkdvbskuaq98",
    },
    {firstname : "Vincent",
    lastname : "Oforka" ,
     username : "godfada" ,
      TimeOut : "20-12-2002" ,
       TimeIn : "25-12-2023" , 
       token : "bsdsbdkvksbhkdvbskuaq99",
     },
     {firstname : "Kingsely",
     lastname : "Amu" ,
      username : "Amu-to-the-world" ,
       TimeOut : "20-12-2002" ,
        TimeIn : "25-12-2023" , 
        token : "bsdsbdkvksbhkdvbskuaq97",
      },
      {firstname : "Salvetion",
      lastname : "Onovo" ,
       username : "202" ,
        TimeOut : "20-12-2002" ,
         TimeIn : "25-12-2023" , 
         token : "bsdsbdkvksbhkdvbskuaq96",
       },
       {firstname : "Chidera",
       lastname : "Chima" ,
        username : "tek" ,
         TimeOut : "20-12-2002" ,
          TimeIn : "25-12-2023" , 
          token : "bsdsbdkvksbhkdvbskuaq95",
        },
        {firstname : "Quincy",
        lastname : "Ebuka" ,
         username : "quincy" ,
          TimeOut : "20-12-2002" ,
           TimeIn : "25-12-2023" , 
           token : "bsdsbdkvksbhkdvbskuaq94",
         },
         {firstname : "Elo",
         lastname : "Nwatakwocha" ,
          username : "bahdest" ,
           TimeOut : "20-12-2002" ,
            TimeIn : "25-12-2023" , 
            token : "bsdsbdkvksbhkdvbskuaq93",
          },

]


 function Table() {

  const createQrcodeForUser = (token,username) => {
    toast.info(`Token has been generated for ${username}`, {toastId : token})
  // try {
  //     const response = await fetch('url',{
  //       method: "POST",
  //       mode: "cors",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({
  //        userToken : token
  //       })
  //     })
  //     if(response.status == 200){
  //       toast.info('qr Code ha been generated')
  //     }
  // } catch (error) {
  //   console.log(error);
  // }
  }
   

  return (
    <Card className="h-full w-full overflow-scroll">
      <h1 className="flex items-center justify-center my-6 text-2xl font-semibold">Attendance Sheet</h1>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {test.map(({ firstname , lastname , username , TimeIn,TimeOut, token }, index) => (
            <tr key={index} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {firstname}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {lastname}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {username}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {TimeIn}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {TimeOut}
                </Typography>
              </td>
              <td className="p-4">
                <Button onClick={() => {createQrcodeForUser(token,username)}} variant="small" color="blue-gray" className="font-normal">
                  Generate QR code
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer/>
    </Card>
  );
}

export default Table