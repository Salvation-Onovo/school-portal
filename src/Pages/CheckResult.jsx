import { ComingSoon, Footer, SideBar } from '../components'

function CheckResult() {
  return (
    <div>
      <div className="flex">
        <SideBar />
        <div className="w-full">
        <h1 className="flex justify-center items-center text-[2rem] font-serif ">Coming Soon</h1>
          <div className="mt-64 w-11/12 h-max mx-4">
            <ComingSoon/>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default CheckResult