import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CategorySearch from "../components/pages/categories/CategorySearch"
import CategoryTable from "../components/pages/categories/CategoryTable"

const Categories = () => (
  <Layout icon="folder" title="Categories" color="success">
    <SEO title="Home" keywords={[`blogui`, `categories`, `react`]} />

    <main>
      <CategorySearch />
      <CategoryTable />
    </main>
  </Layout>
)

export default Categories
