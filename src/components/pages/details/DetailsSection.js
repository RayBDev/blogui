import React from "react"

const DetailsSection = () => {
  return (
    <section id="details">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h4>Edit Post</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      value="Post One"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select className="form-control">
                      <option value="" selected>
                        Web Development
                      </option>
                      <option value="">Tech Gadgets</option>
                      <option value="">Business</option>
                      <option value="">Health & Wellness</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="image">Upload Image</label>
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="image"
                      />
                      <label htmlFor="image" className="custom-file-label">
                        Choose File
                      </label>
                    </div>
                    <small className="form-text text-muted">Max Size 3MB</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="body">Body</label>

                    <textarea className="form-control">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Incidunt obcaecati laudantium quisquam cumque distinctio
                      repellat qui aliquam vitae ipsa harum soluta impedit eum
                      aspernatur odit ratione, quae possimus ea. Dolore tempora,
                      saepe distinctio accusamus earum facilis nihil adipisci
                      animi debitis quo labore repellat, eos ipsa sint commodi
                      voluptatem magni vitae.
                    </textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailsSection
