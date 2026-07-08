import { Route, Routes } from "react-router-dom"

import ServiceDetail from "./components/serviceDetail"
import Home from "./pages/home"


function App() {
 

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/services/:id" element={<ServiceDetail/>} />
    </Routes>
  )
}

export default App
