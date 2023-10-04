import { SideBar } from "."
import Table from "./Table"



function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mx-3">
        <SideBar/>
        13th September , 2023
      </div>
      <main>
        <Table />
      </main>
    </div>
  )
}

export default Home