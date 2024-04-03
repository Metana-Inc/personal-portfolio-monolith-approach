import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import AdminDashboard from "./components/AdminDashboard";
import BlogPost from "./components/BlogPost";
import Projects from "./components/Projects";
import Login from "./components/Login";
import Testimonials from "./components/Testimonials";
import Register from "./components/Register";
import AdminBlog from "./components/AdminBlog";
import AdminProjects from "./components/AdminProject";
import AdminUser from "./components/AdminUser";

export default function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <BrowserRouter>
        <NavBar />
        <Routes style={{ flex: 1 }}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogPost />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />

          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/blogs" element={<AdminBlog />} />
          <Route path="/admin/projects" element={<AdminProjects />} />
          <Route path="/admin/users" element={<AdminUser />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
