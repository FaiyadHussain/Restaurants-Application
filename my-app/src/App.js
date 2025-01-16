import React, { useState, useEffect } from "react";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { Commet } from "react-loading-indicators";

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate a delay for loading the app (you can replace this with actual data fetching logic)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Loader will be displayed for 2 seconds
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader d-flex justify-content-center align-items-center">
          {/* Use Loader from react-loading-indicators */}
          <Commet color="#32cd32" size="medium" text="" textColor="" />
        </div>
      ) : (
        <>
          <Navbar expand="lg" className="fixed-top bg-body-tertiary shadow">
            <Container>
              <Navbar.Brand>
                <Link to="/" className="navbar-brand text-success fw-semibold">
                  ROAST & KRUNCH CAFE
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto justify-content-end text-center w-100">
                  <Nav.Link href="/" className="active text-uppercase">
                    Home
                  </Nav.Link>
                  <Nav.Link href="/menu" className="text-uppercase">
                    Menu
                  </Nav.Link>
                  <Nav.Link href="/about" className="text-uppercase">
                    About
                  </Nav.Link>
                  <Nav.Link href="/contact" className="text-uppercase">
                    Contact
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <footer className="bg-body-tertiary">
            <p className="p-3 m-0 text-center">
              copyright @ made by Ionut Cora
            </p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
