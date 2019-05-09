import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import UserSearch from "../components/pages/users/UserSearch"
import UserTable from "../components/pages/users/UserTable"

const Users = () => (
  <Layout icon="users" title="Users" color="warning">
    <SEO title="Users" keywords={[`blogui`, `users`, `react`]} />

    <main>
      <UserSearch />
      <UserTable />
    </main>
  </Layout>
)

export default Users
