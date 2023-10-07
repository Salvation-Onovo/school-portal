import React from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  ShoppingBagIcon,
  Cog6ToothIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";


import { HiMenuAlt1 } from 'react-icons/hi'

function DrawerNav() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <HiMenuAlt1 onClick={openDrawer} size={22} />
      <Drawer open={open} onClose={closeDrawer}>
        <div className="mb-2 flex items-center justify-between p-4">
          <div className="mb-2 float-right flex flex-col ">

          </div>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
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
          </IconButton>
        </div>
        <List>
          <ListItem>
            <Link to={"/MarkAttendance"}>
              <div className="flex items-center justify-between gap-2">
                <ShoppingBagIcon className="h-5 w-5" />
                <p>Mark Attendance</p>
              </div>
            </Link>
          </ListItem>
          <ListItem>

          <Link to={"/CheckResult"}>
          <div className="flex items-center justify-between gap-2">
          <InboxIcon className="h-5 w-5" />
            <p>Check Result</p>
          </div>
        </Link>
          </ListItem>
          <ListItem>
          <Link to={"/VerifyPayment"}>
          <div className="flex items-center justify-between gap-2">
          <Cog6ToothIcon className="h-5 w-5" />
            <p>Verify Payment</p>
          </div>
        </Link>

            <Link to={"/CheckResult"}>
              <div className="flex items-center justify-between gap-2">
                <InboxIcon className="h-5 w-5" />
                <p>Mark Attendance</p>
              </div>
            </Link>
          </ListItem>
          <ListItem>
            <Link to={"/VerifyPayment"}>
              <div className="flex items-center justify-between gap-2">
                <Cog6ToothIcon className="h-5 w-5" />
                <p>Mark Attendance</p>
              </div>
            </Link>

          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                />
              </svg>
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
}

export default DrawerNav