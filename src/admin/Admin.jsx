import { AdminDrawer, AdminSideBar } from '../components'

function Admin() {
  return (
    <div>
      <div className="flex">
        <AdminSideBar />
        <span className='flex lg:hidden mt-4 ml-2 justify-center items-center rounded-full h-12 w-12 ring-blue-gray-800 shadow-lg'>
          <AdminDrawer />
        </span>
        <div className="w-full">
          <div className="lg:ml-[400px] lg:mr-16 mx-5 lg:mt-6 mt-4 p-2 shadow-lg rounded-md">
            <p className="font-bold text-2xl">Welcome Back</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Admin