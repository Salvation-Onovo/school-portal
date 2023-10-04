import { Typography } from "@material-tailwind/react";
 
function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center shadow-md ring-1 ring-blue-gray-900 py-6 px-6 md:justify-between mt-[515px]">
      <Typography color="blue-gray" className="font-normal">
        &copy; Copyright 2023 3rd Inventories
      </Typography>
    </footer>
  );
}

export default Footer