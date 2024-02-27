import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
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
import Testimonials from "./components/Testimonials";


export default function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes style={{ flex: 1 }}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogPost />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
