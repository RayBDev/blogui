import React from "react"

const DetailsActions = () => (
  <section id="details-actions" className="py-4 mb-4 bg-light">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <a href="/" className="btn btn-light btn-block">
            <i className="fas fa-arrow-left" /> Back To Dashboard
          </a>
        </div>
        <div className="col-md-3">
          <a href="/" className="btn btn-success btn-block">
            <i className="fas fa-check" /> Save Changes
          </a>
        </div>
        <div className="col-md-3">
          <a href="/" className="btn btn-danger btn-block">
            <i className="fas fa-trash" /> Delete Post
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default DetailsActions
