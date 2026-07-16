import { Route, Routes } from "react-router-dom";

import ServiceDetail from "./components/serviceDetail";
import Home from "./pages/home";
import Services from "./pages/servicesPage";
import ContactPage from "./pages/contactPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Services/:id" element={<ServiceDetail />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
