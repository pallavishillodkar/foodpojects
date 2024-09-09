import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style/Mynavbar.css";

function MyNavbar() {
  return (
    <div>
      <Navbar className="navbar-container" expand="lg">
        <Navbar.Brand className="nav-brand"> My Food</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-Nav-Bar" />
        <Navbar.Collapse id="responsive-Nav-Bar">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="menu">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/registered" className="menu">
                Registered
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/aboutus" className="menu">
                AboutUs
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/cart" className="menu">
                Cart
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/profile" className="menu">
                Profile
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contactus" className="menu">
                ContactUs
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/myorders" className="menu">
                MyOrders
              </Link>
            </Nav.Link>
            </Nav>
            {/* <div className='nav-login'>   */}
            {/* <Nav.Link> */}
            <Nav className="ms-auto">
              <Link to="/login" className="menus">
                Login
              </Link>
            </Nav>
            {/* </Nav.Link> */}
            {/* </div>   */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
