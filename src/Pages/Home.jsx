import { ToastContainer, toast } from "react-toastify";
import { Footer, SideBar } from "../components"
import { useEffect } from "react";

 
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
          <div className="mt-10 w-11/12 h-max mx-4 border-blue-gray-900 shadow-lg">
            <p className="mx-10 text-black p-2 font-semibold">WELCOME</p>
          </div>
          <Footer />
        </div>

      </div>
      <ToastContainer/>
    </div>
  )
}

export default Home