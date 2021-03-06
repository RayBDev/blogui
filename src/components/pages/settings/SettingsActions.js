import React from "react"
import { Link } from "gatsby"

const SettingsActions = () => (
  <section id="settings-actions" className="py-4 mb-4 bg-light">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Link to="/" className="btn btn-light btn-block">
            <i className="fas fa-arrow-left" /> Back To Dashboard
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/" className="btn btn-success btn-block">
            <i className="fas fa-check" /> Save Changes
          </Link>
        </div>
      </div>
    </div>
  </section>
)

export default SettingsActions
