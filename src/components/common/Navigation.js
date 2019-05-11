import React, { Component } from "react"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "gatsby"

class Navigation extends Component {
  state = {
    show: false,
  }

  dropDownHandler = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <Navbar expand="md" bg="dark" variant="dark" className="p-1">
        <div className="container">
          <Navbar.Brand href="/">{this.props.siteTitle}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav">
              <li className="nav-item px-2">
                <Link to="/" activeClassName="active" className="nav-link">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link
                  to="/posts/"
                  activeClassName="active"
                  className="nav-link"
                >
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
                <Link
                  to="/users/"
                  activeClassName="active"
                  className="nav-link"
                >
                  Users
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto ">
              <div className="dropdown nav-item">
                <a
                  href="#"
                  class="dropdown-toggle nav-link"
                  onClick={this.dropDownHandler}
                >
                  <i className="fas fa-user" /> Welcome Ray
                </a>
                <div
                  className={
                    this.state.show ? "dropdown-menu show" : "dropdown-menu"
                  }
                >
                  <Link to="/profile/" className="dropdown-item">
                    <i className="fas fa-user-circle" /> Profile
                  </Link>
                  <Link to="/settings/" className="dropdown-item">
                    <i className="fas fa-cog" /> Settings
                  </Link>
                </div>
              </div>
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
}

export default Navigation
