import React from "react"
import LoginNav from "../components/pages/login/LoginNav"
import SEO from "../components/seo"
import Header from "../components/common/Header"
import LoginActions from "../components/pages/login/LoginActions"
import LoginForm from "../components/pages/login/LoginForm"
import Footer from "../components/common/Footer"

const login = () => (
  <>
    <LoginNav siteTitle="BlogUI" />
    <SEO title="Login" keywords={[`blogui`, `login`, `react`]} />
    <Header icon="user" title="BlogUI Admin" color="primary" />
    <main>
      <LoginActions />
      <LoginForm />
    </main>
    <Footer />
  </>
)

export default login
