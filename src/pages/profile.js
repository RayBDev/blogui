import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ProfileActions from "../components/pages/profile/ProfileActions"
import EditProfile from "../components/pages/profile/EditProfile"

const Profile = () => (
  <Layout icon="user" title="Edit Profile" color="primary">
    <SEO title="Home" keywords={[`blogui`, `profile`, `react`]} />
    <main>
      <ProfileActions />
      <EditProfile />
    </main>
  </Layout>
)

export default Profile
