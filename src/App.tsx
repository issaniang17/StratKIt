import { Navigate, Route, Routes } from "react-router-dom";

import ServiceDetail from "./components/serviceDetail";
import Home from "./pages/home";
import Services from "./pages/servicesPage";
import ContactPage from "./pages/contactPage";

import { Toaster } from "sonner";

import HomeLayout from "./layouts/home-layout";
import AuthLayout from "./layouts/auth-layout";
import SignInForm from "./components/forms/signinForm";
import LogInForm from "./components/forms/loginFom";
import DashboardLayout from "./layouts/dashboard-layout";
import Analytics from "./pages/dashboard/analytics";
import Products from "./pages/dashboard/products";
import Messages from "./pages/dashboard/messages";
import Customers from "./pages/dashboard/customers";
import Settings from "./pages/dashboard/settings";
import UserPage from "./pages/user-page";


function App() {
  return (
    <div>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Route>
        <Route path="/user" element={<UserPage/>}/>
        <Route path="auth" element={<AuthLayout/>}>
        <Route path="sign-up" element={<SignInForm />} />
        <Route path="login" element={<LogInForm />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout/>}>
          <Route index element={<Navigate to="analytics" replace/>}/>
          <Route path="analytics" element={<Analytics/>} />
          <Route path="products" element={<Products/>} />
          <Route path="messages" element={<Messages/>}/>
          <Route path="customers" element={<Customers/>} />
          <Route path="settings" element={<Settings/>} />
          <Route path="auth/login" element={<LogInForm/>}/>
          
        </Route>
      </Routes>

      <Toaster richColors position="bottom-right" />
    </div>
  );
}

export default App;
