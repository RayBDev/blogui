import React from "react"
import CKEditor from "ckeditor4-react"

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
                    <input type="text" className="form-control" value="Post One" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select className="form-control">
                      <option value="" selected>Web Development</option>
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

                    <CKEditor data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse, ratione expedita, reiciendis sapiente repudiandae eos laboriosam delectus recusandae, iste a explicabo nemo? Eum vitae beatae tempore aliquam sed cumque deserunt, magnam ea libero, illum architecto mollitia nihil repellendus, odit dignissimos dicta quae quas? Praesentium voluptate explicabo voluptatum. Cum, asperiores!"/>
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
