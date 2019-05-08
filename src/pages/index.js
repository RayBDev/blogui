import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/pages/index/Header"
import Actions from "../components/pages/index/Actions"
import Posts from "../components/pages/index/Posts"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <main>
      <Actions />
      <Posts />
    </main>
  </Layout>
)

export default IndexPage
