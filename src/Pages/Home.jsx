import { ToastContainer } from "react-toastify";
import { SideBar } from "../components"
import { useEffect } from "react";
import DrawerNav from "../components/Drawer";


const userDetails = JSON.parse(localStorage.getItem('userDetails'))

const CheckUser = async (userId) => {
  try {
    const response = await fetch(`https://result-checker-g7zf.onrender.com/api/${userId}`)
    if (response.status == 200) {
      return true
    }
  } catch {
    return false
  }
}
function Home() {

  useEffect(() => {
    CheckUser(userDetails)
  }, []);
  return (
    <div>
      <div className="flex">
        <SideBar />
        <span className='flex lg:hidden mt-4 ml-2 justify-center items-center rounded-full h-12 w-12 ring-blue-gray-800 shadow-lg'>
          <DrawerNav />
        </span>
        <div className="w-full">
          <div className="lg:ml-[400px] lg:mr-16 mx-5 lg:mt-6 mt-4 p-2 shadow-lg rounded-md">
            <p className="font-bold text-2xl">Welcome</p>
          </div>
          
        </div>

      </div>
      <ToastContainer />
    </div>
  )
}

export default Home