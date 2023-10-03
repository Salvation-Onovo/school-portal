import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, Login, ResetPassword, SignUp } from './components'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignUp/>} />
        <Route path="Login" element={<Login/>} />
        <Route path="ResetPassword" element={<ResetPassword/>} />
        <Route path="Home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
