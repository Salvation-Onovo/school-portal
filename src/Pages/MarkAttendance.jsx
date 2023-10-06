import { SideBar } from "../components"
import { Html5QrcodeScanType, Html5QrcodeScanner } from 'html5-qrcode'
import { Button } from "@material-tailwind/react"
import { ToastContainer, toast } from "react-toastify"

function MarkAttendance() {
  const qrId = 'qrId'
  const userDetails = JSON.parse(localStorage.getItem('userDetails'))

  const scan = () => {
    const config = {
      fps: 10,
      qrbox: 250,
      disableFlip: false,
      supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA]
    }
    const scanner = new Html5QrcodeScanner(qrId, config)
    scanner.render(async (data) => {
      if (data == userDetails.userId) {
        try{
      await fetch("https://result-checker-g7zf.onrender.com/api/attendance/signIn", {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
             
              qrCodeData: data
            
            })
          })

          toast.info('Updated');
        }catch{
          toast.error('User does not exist')
        }
        scanner.clear()
      }
    })
  }
  return (
    <div>
      <div className="flex">
        <SideBar />

        <div className="w-full">
          <div  id={qrId}></div>
          <div className="h-screen mx-4 border-blue-gray-900 shadow-lg">
            <h1 className="flex justify-center items-center text-[3rem] font-serif mt-2">Scan your Qr code</h1>
            <div className="flex justify-center items-center">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAYAAAB1PADUAAAAAklEQVR4AewaftIAAATKSURBVO3BQY4cSRIEQdNA/f/Lun30vQSQSK8ekjAR/JGqJSdVi06qFp1ULTqpWnRSteikatFJ1aKTqkUnVYtOqhadVC06qVp0UrXopGrRSdWiT14C8pvU3AD5TWomIJOaCciNmgnIb1LzxknVopOqRSdViz5ZpmYTkE1qboA8AWRSMwGZ1ExAnlCzCcimk6pFJ1WLTqoWffJlQJ5Q8wSQGzU3QG7UTEAmNROQGyCTmjeAPKHmm06qFp1ULTqpWvTJP0bNE2pugHwTkEnN3+ykatFJ1aKTqkWf/GOATGreUDMBmYBMaiYgk5p/2UnVopOqRSdViz75MjX/JSCTmjfU/EnU/ElOqhadVC06qVr0yTIg/yU1E5AbIJOaCcikZgIyqXkCyKTmBsif7KRq0UnVopOqRZ+8pOZvpmYTkCfU3Kj5m5xULTqpWnRSteiTl4BMaiYgm9RMat4AMqmZ1Dyh5gkgk5oJyCY133RSteikatFJ1aJPlgGZ1NwAmdS8AWRSMwGZ1ExAnlDzhpon1ExAJjU3QG7UvHFSteikatFJ1aJPfhmQGyBvqLlRswnIpGYCMql5Qs0E5Akgk5pvOqladFK16KRq0ScvqbkBcqPmCSA3QDapmYBMat4AcqPmCSCTmgnIpGbTSdWik6pFJ1WLPnkJyKRmUjMBmYBMaiYgN2omIJOaCciNmgnIN6l5Q80NkEnNN51ULTqpWnRStQh/5AUgk5ongNyouQEyqZmATGreAPKEmgnIG2omIJOaGyA3at44qVp0UrXopGrRJ18GZFLzBJBJzQ2QGyA3am7UPAFkUvMGkEnNBORGzTedVC06qVp0UrXokz+MmifUTEAmNW8AmdRMQG7U3ACZ1NyomYDcqJmA3Kh546Rq0UnVopOqRfgji4BMat4AcqNmAjKpmYBMar4JyKTmBsik5g0gN2o2nVQtOqladFK1CH/kBSBPqJmATGpugExqboB8k5oJyBtqJiBvqLkBMql546Rq0UnVopOqRZ8sUzMBmYA8AeQGyI2aJ4C8oWYCMqmZgExAvgnIpGbTSdWik6pFJ1WLPvllaiYgE5BJzQTkCSCTmgnIjZoJyA2QJ9T8JjUTkEnNGydVi06qFp1ULcIfeQHIpOYNIDdqJiA3am6ATGomIJOaTUB+k5pvOqladFK16KRq0Scvqdmk5g01E5AbNTdqJiA3aiYgk5obNU8AmdQ8AWRS88ZJ1aKTqkUnVYs+eQnIb1IzqZmA3KiZgExqbtS8AeQJIJOaGyBPqNl0UrXopGrRSdWiT5ap2QTkBsgbam6A3KiZgExqJiBPqHlCzQ2QbzqpWnRSteikatEnXwbkCTWb1LyhZgJyo2YCMqmZgExA3gByo+abTqoWnVQtOqla9En9HyBPALlRMwGZ1DwBZFJzA+Q3nVQtOqladFK16JN/jJobIJOaJ9Q8AWRScwPkRs0EZFIzqZmATGo2nVQtOqladFK16JMvU/NNap5Qc6PmBsgTam6ATGqeUPMnOaladFK16KRq0SfLgPwmIJOaGyCb1NwAuVEzAfkmNd90UrXopGrRSdUi/JGqJSdVi06qFp1ULTqpWnRSteikatFJ1aKTqkUnVYtOqhadVC06qVp0UrXopGrRSdWi/wHrbzslqtjJmwAAAABJRU5ErkJggg==" alt="QR Code" width={500} />
            </div>
            <div className="flex justify-center items-center gap-5">
            <Button onClick={scan} size="lg" color="green" >Take Attendance</Button>
            <a href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAYAAAB1PADUAAAAAklEQVR4AewaftIAAATKSURBVO3BQY4cSRIEQdNA/f/Lun30vQSQSK8ekjAR/JGqJSdVi06qFp1ULTqpWnRSteikatFJ1aKTqkUnVYtOqhadVC06qVp0UrXopGrRSdWiT14C8pvU3AD5TWomIJOaCciNmgnIb1LzxknVopOqRSdViz5ZpmYTkE1qboA8AWRSMwGZ1ExAnlCzCcimk6pFJ1WLTqoWffJlQJ5Q8wSQGzU3QG7UTEAmNROQGyCTmjeAPKHmm06qFp1ULTqpWvTJP0bNE2pugHwTkEnN3+ykatFJ1aKTqkWf/GOATGreUDMBmYBMaiYgk5p/2UnVopOqRSdViz75MjX/JSCTmjfU/EnU/ElOqhadVC06qVr0yTIg/yU1E5AbIJOaCcikZgIyqXkCyKTmBsif7KRq0UnVopOqRZ+8pOZvpmYTkCfU3Kj5m5xULTqpWnRSteiTl4BMaiYgm9RMat4AMqmZ1Dyh5gkgk5oJyCY133RSteikatFJ1aJPlgGZ1NwAmdS8AWRSMwGZ1ExAnlDzhpon1ExAJjU3QG7UvHFSteikatFJ1aJPfhmQGyBvqLlRswnIpGYCMql5Qs0E5Akgk5pvOqladFK16KRq0ScvqbkBcqPmCSA3QDapmYBMat4AcqPmCSCTmgnIpGbTSdWik6pFJ1WLPnkJyKRmUjMBmYBMaiYgN2omIJOaCciNmgnIN6l5Q80NkEnNN51ULTqpWnRStQh/5AUgk5ongNyouQEyqZmATGreAPKEmgnIG2omIJOaGyA3at44qVp0UrXopGrRJ18GZFLzBJBJzQ2QGyA3am7UPAFkUvMGkEnNBORGzTedVC06qVp0UrXokz+MmifUTEAmNW8AmdRMQG7U3ACZ1NyomYDcqJmA3Kh546Rq0UnVopOqRfgji4BMat4AcqNmAjKpmYBMar4JyKTmBsik5g0gN2o2nVQtOqladFK1CH/kBSBPqJmATGpugExqboB8k5oJyBtqJiBvqLkBMql546Rq0UnVopOqRZ8sUzMBmYA8AeQGyI2aJ4C8oWYCMqmZgExAvgnIpGbTSdWik6pFJ1WLPvllaiYgE5BJzQTkCSCTmgnIjZoJyA2QJ9T8JjUTkEnNGydVi06qFp1ULcIfeQHIpOYNIDdqJiA3am6ATGomIJOaTUB+k5pvOqladFK16KRq0Scvqdmk5g01E5AbNTdqJiA3aiYgk5obNU8AmdQ8AWRS88ZJ1aKTqkUnVYs+eQnIb1IzqZmA3KiZgExqbtS8AeQJIJOaGyBPqNl0UrXopGrRSdWiT5ap2QTkBsgbam6A3KiZgExqJiBPqHlCzQ2QbzqpWnRSteikatEnXwbkCTWb1LyhZgJyo2YCMqmZgExA3gByo+abTqoWnVQtOqla9En9HyBPALlRMwGZ1DwBZFJzA+Q3nVQtOqladFK16JN/jJobIJOaJ9Q8AWRScwPkRs0EZFIzqZmATGo2nVQtOqladFK16JMvU/NNap5Qc6PmBsgTam6ATGqeUPMnOaladFK16KRq0SfLgPwmIJOaGyCb1NwAuVEzAfkmNd90UrXopGrRSdUi/JGqJSdVi06qFp1ULTqpWnRSteikatFJ1aKTqkUnVYtOqhadVC06qVp0UrXopGrRSdWi/wHrbzslqtjJmwAAAABJRU5ErkJggg==" download={true}> <Button variant="gradient" className="flex items-center gap-3">
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
            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
          />
        </svg>
        Download Code
      </Button></a>
            </div>
            
          </div>
          <ToastContainer/>
        </div>
      </div>
    </div>
  )
}

export default MarkAttendance