// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="px-3">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
