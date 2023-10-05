import {
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
<<<<<<< HEAD
=======

>>>>>>> 6d52c44983c31ddcaef47b0e58ccd6b5e631b0d6
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";


function SideBar() {
  return (
    <div className="hidden lg:block  h-screen w-full max-w-[20rem] p-4 shadow-xl bg-blue-gray-900 shadow-blue-gray-900/5">
<<<<<<< HEAD
      <div className="mb-2 float-right">
        {/* <XMarkIcon className="text-white w-8 h-8" /> */}
=======
      <div className="mb-2 float-right flex flex-col ">
        
>>>>>>> 6d52c44983c31ddcaef47b0e58ccd6b5e631b0d6
      </div>

      <div className="text-white flex flex-col items-center justify-center mt-10 mb-2">
        <UserCircleIcon className="h-20 w-20" />
        <p></p>
      </div>
      <hr />

      <div className="mt-20">

        <Link to={"/MarkAttendance"}>
          <div className="text-white flex hover:text-gray-800 hover:bg-gray-400 p-2 rounded-lg">
            <ShoppingBagIcon className="h-5 w-5" />
            <p className="ml-3.5">Mark Attendance</p>
          </div>
        </Link>

        <Link to={"/CheckResult"}>
          <div className="text-white flex mt-4 hover:text-gray-800 hover:bg-gray-400 p-2 rounded-lg">
            <InboxIcon className="h-5 w-5" />
            <p className="ml-3.5">Check Results</p>
          </div>
        </Link>

        <Link to={"/VerifyPayment"}>
          <div className="text-white flex mt-4 hover:text-gray-800 hover:bg-gray-400 p-2 rounded-lg">
            <Cog6ToothIcon className="h-5 w-5" />
            <p className="ml-3.5">Verify Fees Payment</p>
          </div>
        </Link>

      </div>

      <div className="text-white flex hover:text-gray-800 hover:bg-gray-400 p-2 rounded-lg mt-36">
        <PowerIcon className="h-5 w-5" />
        <p className="ml-3.5"> Log Out</p>
      </div>
    </div>
  );
}

export default SideBar