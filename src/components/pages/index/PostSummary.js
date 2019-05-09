import React from "react"

const PostSummary = () => {
  return (
    <section id="posts">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
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
                      <a href="/details/" className="btn btn-secondary">
                        <i className="fas fa-angle-double-right" /> Details
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Post Two</td>
                    <td>Tech Gadgets</td>
                    <td>Jan 12 2018</td>
                    <td>
                      <a href="/details/" className="btn btn-secondary">
                        <i className="fas fa-angle-double-right" /> Details
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Post Three</td>
                    <td>Web Development</td>
                    <td>Jan 13 2018</td>
                    <td>
                      <a href="/details/" className="btn btn-secondary">
                        <i className="fas fa-angle-double-right" /> Details
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Post Four</td>
                    <td>Business</td>
                    <td>Jan 16 2018</td>
                    <td>
                      <a href="/details/" className="btn btn-secondary">
                        <i className="fas fa-angle-double-right" /> Details
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Post Five</td>
                    <td>Web Development</td>
                    <td>Jan 20 2018</td>
                    <td>
                      <a href="/details/" className="btn btn-secondary">
                        <i className="fas fa-angle-double-right" /> Details
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Post Six</td>
                    <td>Health & Welness</td>
                    <td>Jan 25 2018</td>
                    <td>
                      <a href="/details/" className="btn btn-secondary">
                        <i className="fas fa-angle-double-right" /> Details
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center bg-primary text-white mb-3">
              <div className="card-body">
                <h3>Posts</h3>
                <h4 className="display-4">
                  <i className="fas fa-pencil-alt" /> 6
                </h4>
                <a href="/posts/" className="btn btn-outline-light btn-sm">
                  View
                </a>
              </div>
            </div>

            <div className="card text-center bg-success text-white mb-3">
              <div className="card-body">
                <h3>Category</h3>
                <h4 className="display-4">
                  <i className="fas fa-folder" /> 4
                </h4>
                <a href="/categories/" className="btn btn-outline-light btn-sm">
                  View
                </a>
              </div>
            </div>

            <div className="card text-center bg-warning text-white mb-3">
              <div className="card-body">
                <h3>Users</h3>
                <h4 className="display-4">
                  <i className="fas fa-users" /> 4
                </h4>
                <a href="/users/" className="btn btn-outline-light btn-sm">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostSummary
