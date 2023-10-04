import {
  Card,
  Input,
  Button,
  Typography,
  Alert,
} from "@material-tailwind/react"
import { useState } from "react"
import React from "react";
import { Link } from "react-router-dom"
import { BsEyeSlash, BsEye } from "react-icons/bs";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function AlertCustomCloseIcon() {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <Alert
        variant="gradient"
        open={open}
        icon={<Icon />}
        color="red"
        action={
          <Button
            variant="text"
            color="white"
            size="sm"
            className="!absolute top-3 right-3"
            onClick={() => setOpen(false)}
          >
            X
          </Button>
        }
      >
        Password Does not Match
      </Alert>
    </>
  );
}

function SignUp() {

  const [firstname, setFirstname] = useState("")
  const [lastname, setLatname] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPwd, setConfirmPwd] = useState("")
  const [view, setView] = useState(false);
  const [fail, setFail] = useState(false);

  const handlesubmit = async (e) => {

    e.preventDefault();
    if (6 > password.length) {
      console.log("Error");
    } else {
      if (password === confirmPwd) {

        try {

          const response = await fetch("https://result-checker-g7zf.onrender.com/api/register", {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              firstName: firstname,
              lastName: lastname,
              password,
              confirm_password: confirmPwd,
              username
            })
          })
          const data = await response.json();
          console.log(data);
          toast.success("Success", { toastId: "custom-id" })
          window.location.href = "/login"
        } catch (err) {

          toast.error("Sign Up Failed")
        }
      } else {
        setFail(true)
      }
    }


  }


  return (
    <div className="flex justify-center items-center mt-10">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">SignUp</Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>

        <form className="mt-6 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handlesubmit} >
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="First Name" required onChange={(e) => setFirstname(e.target.value)} />
            <Input size="lg" label="Last Name" required onChange={(e) => setLatname(e.target.value)} />
            <Input size="lg" label="User Name" required onChange={(e) => setUsername(e.target.value)} />
            {/* <Input size="lg" label="Email" inputMode="email" required onChange={(e) => setEmail(e.target.value)}/> */}
            <Input type={view ? "text" : "password"} required size="lg" label="Password" icon={
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
            } onChange={(e) => setPassword(e.target.value)} />
            {fail ? <AlertCustomCloseIcon /> : ''}
            <Input type={view ? "text" : "password"} required size="lg" label="ConfirmPassword" onChange={(e) => setConfirmPwd(e.target.value)} icon={
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
            } />

            <Input type="file" accept=".png , .jpg , .jpeg " label="ProfilePicture" size="lg" />
          </div>
          <Button className="mt-6" type="submit" fullWidth>
            Register
          </Button>
        </form>


        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to={"/Login"}>
            <a href="#" className="font-medium text-gray-900 hover:text-red-600">
              Log in
            </a>
          </Link>
        </Typography>
      </Card>
      <ToastContainer />

    </div>
  )
}

export default SignUp