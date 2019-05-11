import React from "react"
import { Link } from "gatsby"

const LoginForm = () => {
  return (
    <section id="login">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-header">
                <h4>Account Login</h4>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <Link to="/" className="btn btn-primary btn-block">
                      Login
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginForm
