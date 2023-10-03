import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react"
import { Link } from "react-router-dom"

function Login() {
  return (
    <div className="flex justify-center items-center mt-10">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">Login</Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to Log in
        </Typography>

        <form className="mt-6 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="UserName" />
            <Input type="password" size="lg" label="Password" />
          </div>
        </form>

        <Link to={"/Home"}>
          <Button className="mt-6" fullWidth>
            Login
          </Button>
        </Link>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Forgotten Password?{" "}
          <Link to={"/ResetPassword"}>
            <a href="#" className="font-medium text-gray-900 hover:text-red-600 ">
              reset
            </a>
          </Link>
        </Typography>
      </Card>
    </div>
  )
}

export default Login