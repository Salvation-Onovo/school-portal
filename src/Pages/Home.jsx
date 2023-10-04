import { ToastContainer } from "react-toastify";
import {  SideBar } from "../components"
import { useEffect } from "react";
import DrawerNav from "../components/Drawer";

 
const userDetails = JSON.parse(localStorage.getItem('userDetails'))

const CheckUser = async(userId) =>{
  try{
    const response = await fetch(`https://result-checker-g7zf.onrender.com/api/${userId}`)
    if(response.status == 200){
      return true
    }
  }catch{
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
        <div className="w-full">
          <div className="h-screen mx-4 p-2 flex justify-between">
            <span className='flex md:hidden'>
            <DrawerNav />
            </span>
            Hi Mom !
          </div>
         
        </div>

      </div>
      <ToastContainer/>
    </div>
  )
}

export default Home