import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react"
import { Link } from "react-router-dom"

function ResetPassword() {
  return (
    <div className="flex justify-center items-center mt-10">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">ResetPassword</Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter email to reset password
        </Typography>

        <form className="mt-6 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Email" />
          </div>
        </form>

        <Link to={""}>
          <Button className="mt-1" fullWidth>
            Reset
          </Button>
        </Link>
      </Card>
    </div>
  )
}

export default ResetPassword