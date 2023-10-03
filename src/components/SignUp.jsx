import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Alert,
} from "@material-tailwind/react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { BsEyeSlash , BsEye } from "react-icons/bs";

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
  if(password == confirmPwd){
    console.log('password match !!!');
  }else{
    console.log("password did not match");
    setFail(true)
    setMatch("red")
  }
    console.log(number);
    // window.location.href = "/login"
   }

// const failed = () => {
//   return(
   
    
//   </Alert>
//   )
// }    
   

   const [view, setView] = useState(false);
   const [viewconf, setViewconf] = useState(false);
   const [match, setMatch] = useState("black");
   const [fail, setFail] = useState(false);
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
            <Input size="lg" label="Email" inputMode="email" required onChange={(e) => setEmail(e.target.value)}/>
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
                {fail ?  <Alert
    variant="gradient"
    color="red"
    open={open}
    icon={<Icon />}
   
  >Password does not match</Alert> : ''}
            <Input type={viewconf ? "text" : "password"} required color={match} size="lg" label="ConfirmPassword" onChange={(e) => setConfirmPwd(e.target.value)}  icon={
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
            <Input size="lg" type="tel" inputMode="tel" label="ContactNumber" required onChange={(e) => setNumber(e.target.value)}/>
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