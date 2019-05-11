import React, { Component } from "react"

import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

class Actions extends Component {
  state = {
    show: null,
  }

  handleClose = () => {
    this.setState({ show: null })
  }

  handleShow = modal => {
    this.setState({ show: modal })
  }

  render() {
    return (
      <>
        <section id="actions" className="py-4 mb-4 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <Button
                  variant="primary"
                  block
                  onClick={() => this.handleShow("post")}
                >
                  <i className="fas fa-plus" /> Add Post
                </Button>
              </div>
              <div className="col-md-3">
                <Button
                  variant="success"
                  block
                  onClick={() => this.handleShow("category")}
                >
                  <i className="fas fa-plus" /> Add Category
                </Button>
              </div>
              <div className="col-md-3">
                <Button
                  variant="warning"
                  block
                  onClick={() => this.handleShow("user")}
                >
                  <i className="fas fa-plus" /> Add User
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- MODALS ----------- */}

        {/* ADD POST MODAL */}
        <Modal
          show={this.state.show === "post"}
          onHide={this.handleClose}
          size="lg"
          animation="true"
        >
          <Modal.Header closeButton className="bg-primary text-white">
            <Modal.Title>Add Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select className="form-control">
                  <option value="">Web Development</option>
                  <option value="">Tech Gadgets</option>
                  <option value="">Business</option>
                  <option value="">Health & Wellness</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="image">Upload Image</label>
                <div className="custom-file">
                  <input type="file" className="custom-file-input" id="image" />
                  <label htmlFor="image" className="custom-file-label">
                    Choose File
                  </label>
                </div>
                <small className="form-text text-muted">Max Size 3MB</small>
              </div>
              <div className="form-group">
                <label htmlFor="body">Body</label>

                <textarea className="form-control" />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        {/* ADD CATEGORY MODAL */}
        <Modal
          show={this.state.show === "category"}
          onHide={this.handleClose}
          size="lg"
          animation="true"
        >
          <Modal.Header closeButton className="bg-success text-white">
            <Modal.Title>Add Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        {/* ADD USER MODAL */}
        <Modal
          show={this.state.show === "user"}
          onHide={this.handleClose}
          size="lg"
          animation="true"
        >
          <Modal.Header closeButton className="bg-warning text-white">
            <Modal.Title>Add User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input type="password" className="form-control" />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default Actions
