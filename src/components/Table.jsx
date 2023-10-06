import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["UserName", "Date", "Attendance", "Time In", "Time Out" ];
 
const TABLE_ROWS = [
  {
    UserName: "John Michael",
    Attendance: "present",
    date: "23/04/18",
    TimeIn: "8:00pm",
    TimeOut: "2:00pm",
  },
];
 
 function Table() {

  return (
    <Card className="h-full w-full overflow-scroll">
      <h1 className="flex items-center justify-center my-6 text-2xl font-semibold">Attendance Sheet</h1>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ UserName, date, Attendance, TimeIn,TimeOut  }, index) => (
            <tr key={index} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {UserName}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {date}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {Attendance}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {TimeIn}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {TimeOut}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default Table