import { ComingSoon, Footer, SideBar } from '../components'

function VerifyPayment() {
  return (
    <div>
      <div className="flex">
        <SideBar/>
        <div className="w-full">
          
          <div className="mt-64 w-11/12 h-max mx-4 flex justify-center items-center">
            <ComingSoon/>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default VerifyPayment