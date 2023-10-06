import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Admin, AdminAttendance, AdminMarkAttendance, CheckResult, Drawer, Home, Login, MarkAttendance, ResetPassword, SignUp, VerifyPayment } from './components'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignUp/>} />
        <Route path="Login" element={<Login/>} />
        <Route path="ResetPassword" element={<ResetPassword/>}/>
        <Route path="Home" element={<Home/>}/>
        <Route path="MarkAttendance" element={<MarkAttendance/>}/>
        <Route path="CheckResult" element={<CheckResult/>}/>
        <Route path="VerifyPayment" element={<VerifyPayment/>}/>
        <Route path="Drawer" element={<Drawer/>}/>
        <Route path="Admin" element={<Admin/>}/>
        <Route path="AdminMarkAttendance" element={<AdminMarkAttendance/>}/>
        <Route path="AdminAttendance" element={<AdminAttendance/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
