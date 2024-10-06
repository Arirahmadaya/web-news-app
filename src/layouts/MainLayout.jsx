// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen" >
      <Navbar />
      <div className="container md:mx-20 mx-4">

      <Outlet />
      </div>
      <Footer />
    </div>
  );
}
