import React from "react"
import { Link } from "gatsby"

const PostTable = () => {
  return (
    <section id="post-table">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h4>Latest Posts</h4>
              </div>
              <table className="table table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Post One</td>
                    <td>Web Development</td>
                    <td>Jan 10 2018</td>
                    <td>
                      <Link to="/details/" className="btn btn-secondary">
                        <i className="fas fa-angle-double-right" /> Details
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Post Two</td>
                    <td>Tech Gadgets</td>
                    <td>Jan 12 2018</td>
                    <td>
                      <Link to="/details/" className="btn btn-secondary">
                        <i className="fas fa-angle-double-right" /> Details
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Post Three</td>
                    <td>Web Development</td>
                    <td>Jan 13 2018</td>
                    <td>
                      <Link to="/details/" className="btn btn-secondary">
                        <i className="fas fa-angle-double-right" /> Details
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Post Four</td>
                    <td>Business</td>
                    <td>Jan 16 2018</td>
                    <td>
                      <Link to="/details/" className="btn btn-secondary">
                        <i className="fas fa-angle-double-right" /> Details
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Post Five</td>
                    <td>Web Development</td>
                    <td>Jan 20 2018</td>
                    <td>
                      <Link to="/details/" className="btn btn-secondary">
                        <i className="fas fa-angle-double-right" /> Details
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Post Six</td>
                    <td>Health & Welness</td>
                    <td>Jan 25 2018</td>
                    <td>
                      <Link to="/details/" className="btn btn-secondary">
                        <i className="fas fa-angle-double-right" /> Details
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
              <nav className="ml-4">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <Link to="#" activeClassName="active" className="page-link">
                      Previous
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      to="/posts/"
                      activeClassName="active"
                      className="page-link"
                    >
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link to="#" activeClassName="active" className="page-link">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link to="#" activeClassName="active" className="page-link">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link to="#" activeClassName="active" className="page-link">
                      Next
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostTable
