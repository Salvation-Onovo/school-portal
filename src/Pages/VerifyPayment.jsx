import { ComingSoon, Footer, SideBar } from '../components'
import DrawerNav from '../components/Drawer'

function VerifyPayment() {
  return (
    <div>
      <div className="flex">
        <SideBar />
        <span className='flex lg:hidden mt-4 ml-2 justify-center items-center rounded-full h-12 w-12 ring-blue-gray-800 shadow-lg'>
          <DrawerNav />
        </span>
        <div className="w-full">
          <h1 className="flex justify-center items-center text-[2rem] font-serif ">Coming Soon</h1>
          <div className="flex justify-center items-center">
            <ComingSoon />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default VerifyPayment