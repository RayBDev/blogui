import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DetailsActions from "../components/pages/details/DetailsActions"
import DetailsSection from "../components/pages/details/DetailsSection"

const Details = () => (
  <Layout title="Post One" color="primary">
    <SEO title="Post One" keywords={[`blogui`, `post one details`, `react`]} />
    <main>
      <DetailsActions />
      <DetailsSection/>
    </main>
  </Layout>
)

export default Details
