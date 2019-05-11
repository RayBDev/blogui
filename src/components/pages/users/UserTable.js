import React from "react"
import { Link } from "gatsby"

const UserTable = () => {
  return (
    <section id="post-table">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h4>Latest Users</h4>
              </div>
              <table className="table table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>jdoe@gmail.com</td>
                    <td>
                      <Link to="/details/" className="btn btn-secondary">
                        <i className="fas fa-angle-double-right" /> Details
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Sally Johnson</td>
                    <td>sjohnson@gmail.com</td>
                    <td>
                      <Link to="/details/" className="btn btn-secondary">
                        <i className="fas fa-angle-double-right" /> Details
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Mary Salinger</td>
                    <td>marysal@yahoo.com</td>
                    <td>
                      <Link to="/details/" className="btn btn-secondary">
                        <i className="fas fa-angle-double-right" /> Details
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserTable
