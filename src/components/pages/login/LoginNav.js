import React from "react"
import Navbar from "react-bootstrap/Navbar"

const LoginNav = ({ siteTitle }) => {
  return (
    <Navbar expand="md" bg="dark" variant="dark" className="p-1">
      <div className="container">
        <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
      </div>
    </Navbar>
  )
}

export default LoginNav
