import { SideBar } from "."



function Home() {
  return (
    <div className="flex flex-col">

      <div className="flex justify-between items-center mx-3">
      <SideBar/>
     Dashboard
      </div>
    </div>
  )
}

export default Home