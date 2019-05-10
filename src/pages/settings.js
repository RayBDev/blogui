import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SettingsActions from "../components/pages/settings/SettingsActions"
import SettingsSection from "../components/pages/settings/SettingsSection"

const Settings = () => (
  <Layout icon="cog" title="Settings" color="primary">
    <SEO title="Settings" keywords={[`blogui`, `settings`, `react`]} />
    <main>
      <SettingsActions />
      <SettingsSection />
    </main>
  </Layout>
)

export default Settings
