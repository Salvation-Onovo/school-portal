import { useEffect } from "react"
import { Footer, SideBar } from "../components"
import { Html5QrcodeScanType, Html5QrcodeScanner } from 'html5-qrcode'

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
        console.log(data);
        scanner.clear()
      }
    })
  }

  const generateQrcode = async () => {
    const response = await fetch("https://result-checker-g7zf.onrender.com/api/users/generateQRCode", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + userDetails.token
      }
    })

    console.log("RESPONSE", response);
  }

  useEffect(() => {
    generateQrcode()
  })

  return (
    <div>
      <div className="flex">
        <SideBar />

        <div className="w-full">
          <div className="my-5" id={qrId}></div>
          <div className="mt-10 w-2/12 h-max mx-4 border-blue-gray-900 shadow-lg">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAYAAAB1PADUAAAAAklEQVR4AewaftIAAATKSURBVO3BQY4cSRIEQdNA/f/Lun30vQSQSK8ekjAR/JGqJSdVi06qFp1ULTqpWnRSteikatFJ1aKTqkUnVYtOqhadVC06qVp0UrXopGrRSdWiT14C8pvU3AD5TWomIJOaCciNmgnIb1LzxknVopOqRSdViz5ZpmYTkE1qboA8AWRSMwGZ1ExAnlCzCcimk6pFJ1WLTqoWffJlQJ5Q8wSQGzU3QG7UTEAmNROQGyCTmjeAPKHmm06qFp1ULTqpWvTJP0bNE2pugHwTkEnN3+ykatFJ1aKTqkWf/GOATGreUDMBmYBMaiYgk5p/2UnVopOqRSdViz75MjX/JSCTmjfU/EnU/ElOqhadVC06qVr0yTIg/yU1E5AbIJOaCcikZgIyqXkCyKTmBsif7KRq0UnVopOqRZ+8pOZvpmYTkCfU3Kj5m5xULTqpWnRSteiTl4BMaiYgm9RMat4AMqmZ1Dyh5gkgk5oJyCY133RSteikatFJ1aJPlgGZ1NwAmdS8AWRSMwGZ1ExAnlDzhpon1ExAJjU3QG7UvHFSteikatFJ1aJPfhmQGyBvqLlRswnIpGYCMql5Qs0E5Akgk5pvOqladFK16KRq0ScvqbkBcqPmCSA3QDapmYBMat4AcqPmCSCTmgnIpGbTSdWik6pFJ1WLPnkJyKRmUjMBmYBMaiYgN2omIJOaCciNmgnIN6l5Q80NkEnNN51ULTqpWnRStQh/5AUgk5ongNyouQEyqZmATGreAPKEmgnIG2omIJOaGyA3at44qVp0UrXopGrRJ18GZFLzBJBJzQ2QGyA3am7UPAFkUvMGkEnNBORGzTedVC06qVp0UrXokz+MmifUTEAmNW8AmdRMQG7U3ACZ1NyomYDcqJmA3Kh546Rq0UnVopOqRfgji4BMat4AcqNmAjKpmYBMar4JyKTmBsik5g0gN2o2nVQtOqladFK1CH/kBSBPqJmATGpugExqboB8k5oJyBtqJiBvqLkBMql546Rq0UnVopOqRZ8sUzMBmYA8AeQGyI2aJ4C8oWYCMqmZgExAvgnIpGbTSdWik6pFJ1WLPvllaiYgE5BJzQTkCSCTmgnIjZoJyA2QJ9T8JjUTkEnNGydVi06qFp1ULcIfeQHIpOYNIDdqJiA3am6ATGomIJOaTUB+k5pvOqladFK16KRq0Scvqdmk5g01E5AbNTdqJiA3aiYgk5obNU8AmdQ8AWRS88ZJ1aKTqkUnVYs+eQnIb1IzqZmA3KiZgExqbtS8AeQJIJOaGyBPqNl0UrXopGrRSdWiT5ap2QTkBsgbam6A3KiZgExqJiBPqHlCzQ2QbzqpWnRSteikatEnXwbkCTWb1LyhZgJyo2YCMqmZgExA3gByo+abTqoWnVQtOqla9En9HyBPALlRMwGZ1DwBZFJzA+Q3nVQtOqladFK16JN/jJobIJOaJ9Q8AWRScwPkRs0EZFIzqZmATGo2nVQtOqladFK16JMvU/NNap5Qc6PmBsgTam6ATGqeUPMnOaladFK16KRq0SfLgPwmIJOaGyCb1NwAuVEzAfkmNd90UrXopGrRSdUi/JGqJSdVi06qFp1ULTqpWnRSteikatFJ1aKTqkUnVYtOqhadVC06qVp0UrXopGrRSdWi/wHrbzslqtjJmwAAAABJRU5ErkJggg==" alt="QR Code"></img>
            {/* <Table/> */}

            <button onClick={scan}>Scan QrCode</button>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  )
}

export default MarkAttendance