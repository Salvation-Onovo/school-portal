import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react"
import { BsEyeSlash , BsEye } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

function Login() {

  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")
  const [view, setView] = useState(false);

  const login = async(e) => {
    e.preventDefault()
    try {
         
      const response = await fetch("https://result-checker-g7zf.onrender.com/api/users/login", {
      method: "POST",
      mode: "cors",
      headers : {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
         password , 
      })
    })
      const data = await response.json();
      if(response.status == 200){
        
        localStorage.setItem('userDetails', JSON.stringify(data))
 toast.success("Success" , {toastId  : "custom-id"})
  window.location.href="/home"
      }else{
        toast.error(data.message)
      }
    } catch(err) {

toast.error("Login Failed",{toastId : 'custom-id'})
    }
  }
  return (
    <div className="flex justify-center items-center mt-10">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">Login</Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to Log in
        </Typography>

        <form className="mt-6 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={login}>
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="User Name" required  onChange={(e) => setUsername(e.target.value)} />
            <Input type={view ? "text" : "password"}  required size="lg" label="Password"  onChange={(e) => setPassword(e.target.value)}  icon={
                  view ? (
                    <BsEye
                      className="cursor-pointer"
                      onClick={() => setView(!view)}
                    />
                  ) : (
                    <BsEyeSlash
                      className="cursor-pointer"
                      onClick={() => setView(!view)}
                    />
                  )
                }/>
          </div>
          <Button className="mt-6" type="submit" fullWidth>
            Login
          </Button>
        </form>

      </Card>
      <ToastContainer/>
    </div>
  )
}

export default Login