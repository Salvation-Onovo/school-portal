import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen max-w-[20rem] p-4 shadow-xl bg-blue-gray-900 shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>

      <div>
        <ListItem className="text-white">
          <UserCircleIcon className="h-24 w-24" />
          Salvation
        </ListItem>
        <List>

          <Link to={"/Home"}>
            <ListItem className="text-white">
              <ListItemPrefix>
                <HomeIcon className="h-5 w-5" />
              </ListItemPrefix>
              Home
            </ListItem>
          </Link>

          <Link to={"/MarkAttendance"}>
            <ListItem className="text-white">
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              Mark Attendance
            </ListItem>
          </Link>

          <Link to={"/CheckResult"}>
            <ListItem className="text-white">
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Check Results
              {/* <ListItemSuffix>
              <Chip value="14" size="sm" color="blue-gray" className="rounded-full" />
            </ListItemSuffix> */}
            </ListItem>
          </Link>

          <Link to={"/VerifyPayment"}>
            <ListItem className="text-white">
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              Verify Fees Payment
            </ListItem>
          </Link>
        </List>
        <ListItem className="mt-52 text-white">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </div>
    </div>
  );
}

export default Home