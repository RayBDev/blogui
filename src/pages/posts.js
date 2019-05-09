import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostSearch from "../components/pages/posts/PostSearch"
import PostTable from "../components/pages/posts/PostTable"

const Posts = () => (
  <Layout icon="pencil-alt" title="Posts" color="primary">
    <SEO title="Posts" keywords={[`blogui`, `posts`, `react`]} />
    <main>
      <PostSearch />
      <PostTable />
    </main>
  </Layout>
)

export default Posts
