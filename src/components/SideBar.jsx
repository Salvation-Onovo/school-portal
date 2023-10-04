import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Drawer,
  IconButton,
  
} from "@material-tailwind/react";
import {
 
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,

} from "@heroicons/react/24/solid";
import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";


function SideBar ({closeme}){
  return (
    <div className="h-screen w-full max-w-[20rem] p-4 shadow-xl bg-white shadow-blue-gray-900/5">
      <div className="flex justify-between items-center mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      {closeme}
      </div>
   <div className="flex flex-col justify-between h-full">
   <List>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>

        <ListItem>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          Mark Attendance
        </ListItem>

        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Verify Fees Payment
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Check Results
          <ListItemSuffix>
          </ListItemSuffix>
        </ListItem>
      </List>
   </div>
    </div>
  )
}



function Home() {
  const [open, setOpen] = React.useState(false);
 
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <>
    
    <header className="my-3">
   <nav className="flex justify-between items-center">
    <div><BiMenuAltLeft onClick={openDrawer} size={28}/></div>
    <div></div>
    </nav>
   </header>
      <Drawer open={open} onClose={closeDrawer} >      
        <SideBar closeme={  <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>}/>
      </Drawer>
    </>
  );
}

export default Home