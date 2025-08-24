import React from "react";
import { NavLink } from "react-router-dom";
import { MDBNavbar, MDBContainer, MDBNavbarNav, MDBNavbarItem } from "mdb-react-ui-kit";

const Navbar = () => {
  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer>
        <MDBNavbarNav className="d-flex justify-content-center w-100">
          <MDBNavbarItem>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </MDBNavbarItem>

          <MDBNavbarItem>
            <NavLink to="/projects" className="nav-link">
              Projects
            </NavLink>
          </MDBNavbarItem>

          <MDBNavbarItem>
            <NavLink to="/tasks" className="nav-link">
              Tasks
            </NavLink>
          </MDBNavbarItem>

          <MDBNavbarItem>
            <NavLink to="/profile" className="nav-link">
              Profile
            </NavLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;
