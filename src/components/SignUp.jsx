import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react"
import { Link } from "react-router-dom"

function SignUp() {
  return (
    <div className="flex justify-center items-center mt-10">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">SignUp</Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>

        <form className="mt-6 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="FirstName" />
            <Input size="lg" label="LastName" />
            <Input size="lg" label="UserName" />
            <Input size="lg" label="Email" />
            <Input type="password" size="lg" label="Password" />
            <Input type="password" size="lg" label="ConfirmPassword"/>
            <Input size="lg" label="ContactNumber"/>
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
        <Link to={"/Login"}>
          <Button className="mt-6" fullWidth>
            Register
          </Button>
        </Link>
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