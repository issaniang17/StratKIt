import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Localisation from "../components/Localisation";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <section className=" bg-slate-900">
        <Contact />
      </section>
      <section>
        <Localisation />
      </section>
      <Footer />
    </div>
  );
};

export default HomeLayout;
