import React from "react"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link } from "gatsby"

const Navigation = ({ siteTitle }) => {
  return (
    <Navbar expand="md" bg="dark" variant="dark" className="p-1">
      <div className="container">
        <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav">
            <li className="nav-item px-2">
              <Link to="/" activeClassName="active" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link to="/posts/" activeClassName="active" className="nav-link">
                Posts
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link
                to="/categories/"
                activeClassName="active"
                className="nav-link"
              >
                Categories
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link to="/users/" activeClassName="active" className="nav-link">
                Users
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto ">
            <NavDropdown title="&#128100; Welcome Ray" id="basic-nav-dropdown">
              <NavDropdown.Item href="/profile/">
                <i className="fas fa-user-circle" /> Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="/settings/">
                <i className="fas fa-cog" /> Settings
              </NavDropdown.Item>
            </NavDropdown>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/login/" className="nav-link">
                <i className="fas fa-user-times" /> Logout
              </Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default Navigation
