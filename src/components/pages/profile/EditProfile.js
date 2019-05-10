import React from "react"
import CKEditor from "ckeditor4-react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const EditProfile = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "avatar.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <section id="posts">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="card-header">
                  <h4>Edit Profile</h4>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value="Ray Bernard"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value="ray@test.com"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Bio</label>
                      <CKEditor
                        data="Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Nemo quibusdam ratione quisquam quidem culpa animi
                        voluptatibus veniam incidunt eaque, eos impedit!
                        Praesentium sed eaque aperiam corporis recusandae iusto
                        pariatur molestiae? Molestias, tenetur? Omnis, rerum!
                        Laborum illo exercitationem, modi, debitis fuga non
                        eligendi porro cumque at dignissimos, dolorem aliquid
                        vero natus!"
                        className="form-control"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <h3>Your Avatar</h3>
              <div className="mb-3">
                <Img fluid={data.placeholderImage.childImageSharp.fluid} />
              </div>
              <button className="btn btn-primary btn-block">Edit Image</button>
              <button className="btn btn-danger btn-block">Delete Image</button>
            </div>
          </div>
        </div>
      </section>
    )}
  />
)

export default EditProfile
