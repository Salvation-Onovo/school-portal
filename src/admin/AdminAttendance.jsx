import { Table } from "../components"
import AdminSideBar from "./AdminSideBar"


const getUsers = async() => {
  try {
    const users = await fetch('https://result-checker-g7zf.onrender.com/api/users/all/student')
    console.log(users)
  } catch (error) {
    console.log(error);
  }
}

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