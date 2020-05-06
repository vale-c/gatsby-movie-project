import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/series/">Browse TV Series</Link>
    <Link to="/movies/">Browse Popular Movies</Link>
  </Layout>
)

export default IndexPage
