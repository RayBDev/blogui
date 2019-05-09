import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Actions from "../components/pages/index/Actions"
import PostSummary from "../components/pages/index/PostSummary"

const IndexPage = () => (
  <Layout icon="cog" title="Dashboard" color="primary">
    <SEO title="Home" keywords={[`blogui`, `application`, `react`]} />
    <main>
      <Actions />
      <PostSummary />
    </main>
  </Layout>
)

export default IndexPage
