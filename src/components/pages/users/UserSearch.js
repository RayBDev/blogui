import React from "react"

const UserSearch = () => {
  return (
    <section id="post-search" className="py-4 mb-4 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ml-auto">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search Users..."
              />
              <div className="input-group-append">
                <button className="btn btn-warning">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserSearch
