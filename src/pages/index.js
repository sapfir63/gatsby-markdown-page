import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useEffect } from "react"
import { navigate } from "gatsby"

const IndexPage = () => {
  useEffect(() => {
    navigate("/")
  }, [])
  return (
    <Layout>
      <SEO title="Home" />
    </Layout>
  )
}
export default IndexPage