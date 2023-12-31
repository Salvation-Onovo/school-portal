import { Typography } from "@material-tailwind/react";

function Footer() {
  return (
    <footer className="hidden lg:flex w-full flex-row flex-wrap items-center justify-center shadow-md ring-1 ring-blue-gray-900 py-6 px-6 md:justify-between bottom-0 fixed">
      <Typography color="blue-gray" className="font-normal ml-80">
        &copy; Copyright 2023 3rd Inventories
      </Typography>
    </footer>
  );
}

export default Footer