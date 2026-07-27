import { Route, Routes } from "react-router-dom";

import ServiceDetail from "./components/serviceDetail";
import Home from "./pages/home";
import Services from "./pages/servicesPage";
import ContactPage from "./pages/contactPage";
import Navbar from "./components/Navbar";
import { Toaster } from "sonner";
import SignIn from "./pages/signInPage";
import LoginPage from "./pages/loginPage";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Services/:id" element={<ServiceDetail />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Sign up" element={<SignIn/>} />
        <Route path="/Log in" element={<LoginPage/>} />
      </Routes>

      <Toaster richColors position="bottom-right" />
    </div>
  );
}

export default App;
