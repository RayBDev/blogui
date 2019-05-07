import React from "react"

const Header = () => {
  return (
    <header id="main-header" className="py2 bg-primary text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="my-1">
              <i className="fas fa-cog" /> Dashboard
            </h1>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
