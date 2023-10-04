import { Footer, SideBar } from "../components"


function Home() {
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
    </div>
  )
}

export default Home