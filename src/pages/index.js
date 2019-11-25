import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useEffect } from "react"
import { navigate } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

const IndexPage = () => {
  useEffect(() => {
    navigate("/tabs")
  }, [])
  return (
    <Layout>
      <SEO title="Home" />
       <Container className="text-center"></Container>
    </Layout>
  )
}
export default IndexPage