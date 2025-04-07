// src/layouts/MainLayout.tsx
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Layout/Sidebar";

const MainLayout = () => {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        const section = document.querySelector(target.hash);
        if (section) {
          e.preventDefault();
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Attach handler to all nav links with hashes
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <main className="main-content" style={{ flexGrow: 1, overflowY: "auto" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
