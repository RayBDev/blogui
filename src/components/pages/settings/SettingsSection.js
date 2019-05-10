import React from "react"

const SettingsSection = () => {
  return (
    <section id="settings">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h4>Edit Settings</h4>
              </div>
              <div className="card-body">
                <form>
                  <fieldset className="form-group">
                    <legend>Allow User Registration</legend>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          className="form-check-input"
                          value="Yes"
                          checked
                        />{" "}
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          className="form-check-input"
                          value="No"
                        />{" "}
                        No
                      </label>
                    </div>
                  </fieldset>
                  <fieldset className="form-group">
                    <legend>Homepage Format</legend>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          className="form-check-input"
                          value="posts"
                          checked
                        />{" "}
                        Blog Page
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          className="form-check-input"
                          value="page"
                        />{" "}
                        Home Page
                      </label>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SettingsSection
