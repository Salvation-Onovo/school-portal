import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { BsEyeSlash , BsEye } from "react-icons/bs";

function SignUp() {

  const [firstname , setFirstname] = useState("")
  const [lastname , setLatname] = useState("")
  const [username , setUsername] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [confirmPwd , setConfirmPwd] = useState("")
  const [number , setNumber] = useState("")

   const handlesubmit = (e) => {
    e.preventDefault()
    console.log(firstname);
    console.log(lastname);
    console.log(username);
    console.log(email);
    console.log(password);
    console.log(number);
    console.log(confirmPwd);
    window.location.href = "/login"
   }

   

   const [view, setView] = useState(false);
   const [viewconf, setViewconf] = useState(false);
  return (
    <div className="flex justify-center items-center mt-10">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">SignUp</Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>

        <form className="mt-6 mb-2 w-80 max-w-screen-lg sm:w-96" >
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="First Name" required onChange={(e) => setFirstname(e.target.value)}/>
            <Input size="lg" label="Last Name" required onChange={(e) => setLatname(e.target.value)}/>
            <Input size="lg" label="User Name" required onChange={(e) => setUsername(e.target.value)}/>
            <Input size="lg" label="Email" required onChange={(e) => setEmail(e.target.value)}/>
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
                } onChange={(e) => setPassword(e.target.value)}/>
            <Input type={viewconf ? "text" : "password"} required size="lg" label="ConfirmPassword" onChange={(e) => setConfirmPwd(e.target.value)}  icon={
                  viewconf ? (
                    <BsEye
                      className="cursor-pointer"
                      onClick={() => setViewconf(!view)}
                    />
                  ) : (
                    <BsEyeSlash
                      className="cursor-pointer"
                      onClick={() => setViewconf(!view)}
                    />
                  )
                }/>
            <Input size="lg" label="ContactNumber" required onChange={(e) => setNumber(e.target.value)}/>
            <Input type="file" label="ProfilePicture" size="lg"/>
          </div>
        </form>

        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          } containerProps={{ className: "-ml-2.5" }}
        />
        
          <Button className="mt-6" onClick={handlesubmit} type="submit" fullWidth>
            Register
          </Button>
       
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to={"/Login"}>
            <a href="#" className="font-medium text-gray-900 hover:text-red-600">
              Log in
            </a>
          </Link>
        </Typography>
      </Card>
    </div>
  )
}

export default SignUp