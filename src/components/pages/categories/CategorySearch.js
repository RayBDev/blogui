import React from "react"

const CategorySearch = () => {
  return (
    <section id="category-search" className="py-4 mb-4 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ml-auto">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search Categories..."
              />
              <div className="input-group-append">
                <button className="btn btn-success">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategorySearch
