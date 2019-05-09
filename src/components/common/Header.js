import React from "react"

const Header = ({ icon, title, color }) => {
  let iconComponent
  if (icon === undefined) {
    iconComponent = null
  } else {
    iconComponent = <i className={`fas fa-${icon}`} />
  }

  let headerColor = `py-2 bg-${color} text-white`
  return (
    <header id="main-header" className={headerColor}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="my-1">
              {iconComponent} {title}
            </h1>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
