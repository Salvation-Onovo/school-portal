import {
  ShoppingBagIcon,
  UserCircleIcon,
  PowerIcon,
  InboxIcon,

} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";


function AdminSideBar() {
  return (
    <div className="hidden lg:block  h-screen w-full max-w-[20rem] p-4 shadow-xl bg-blue-gray-900 shadow-blue-gray-900/5 fixed">
      <div className="mb-2 float-right flex flex-col ">
        
      </div>

      <div className="text-white flex flex-col items-center justify-center mt-10 mb-2">
        <UserCircleIcon className="h-20 w-20" />
        <p>Admin</p>
      </div>
      <hr />

      <div className="mt-20">

        <Link to={"/AdminMarkAttendance"}>
          <div className="text-white flex hover:text-gray-800 hover:bg-gray-400 p-2 rounded-lg">
            <ShoppingBagIcon className="h-5 w-5" />
            <p className="ml-3.5">Mark Attendance</p>
          </div>
        </Link>
        
        <Link to={"/AdminAttendance"}>
          <div className="text-white flex hover:text-gray-800 hover:bg-gray-400 p-2 rounded-lg">
            <InboxIcon className="h-5 w-5" />
            <p className="ml-3.5">Attendance</p>
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

export default AdminSideBar