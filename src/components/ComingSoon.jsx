import { Spinner } from "@material-tailwind/react";

function ComingSoon() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center font-bold text-4xl mb-5">Coming Soon</h1>
      <Spinner className="h-16 w-16 text-gray-900/50" />
    </div>
  )
}

export default ComingSoon