import { Table } from "../components"
import AdminSideBar from "./AdminSideBar"


function AdminAttendance() {
  return (
    <div className="flex">
      <AdminSideBar/>
      <div className="ml-80 w-full h-full flex justify-center items-center">
        <Table/>
      </div>
    </div>
  )
}

export default AdminAttendance