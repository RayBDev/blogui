import React from "react"

const CategoryTable = () => {
  return (
    <section id="category-table">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h4>Latest Categories</h4>
              </div>
              <table className="table table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
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
                    <td>Business</td>
                    <td>Jan 13 2018</td>
                    <td>
                      <a href="/details/" className="btn btn-secondary">
                        <i className="fas fa-angle-double-right" /> Details
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Health & Wellness</td>
                    <td>Jan 16 2018</td>
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
        </div>
      </div>
    </section>
  )
}

export default CategoryTable
