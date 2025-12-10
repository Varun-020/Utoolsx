// src/layouts/MainLayout.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="app">
      <NavBar />
      <main className="container">
        <Outlet />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Utoolsx • Built with React</p>
      </footer>
    </div>
  );
}
