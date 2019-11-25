/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import Header from "./header"
import Navbar from "./navBar"
import Sidebar from "./sidebar";
//import Footer from "./footer";


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

    render={data => (
      <>

      <Container fluid className="px-0 main">
        <Row noGutters className="justify-content-center">
          <Col className="text-center">
            <Header siteTitle={data.site.siteMetadata.title} />
          </Col>
        </Row>
        <Navbar pageInfo={data.site.siteMetadata.title} />

        <Row noGutters>
          <Col sm={4}>

              <Sidebar />

          

          </Col>


       
          <Col>
            <Container sm={8}>
              <main>{children}</main>
            </Container>
          </Col>
      
          </Row>
        </Container>

      <Container fluid className="px-0">
        <Row noGutters>
          <Col className="footer-col">
            <footer>
              <span>
                © {new Date().getFullYear()}, Built with
                  {` `}
                <a href="https://www.gatsbyjs.org">GatsbyJS</a>, originally coded by
                  {` `}<a href="https://github.com/billyjacoby">Billy Jacoby</a>
                <br />
                {` `}Enhanced by <a href="https://twitter.com/Sm0keDev">Sm0ke</a>
              </span>
            </footer>
          </Col>
        </Row>
      </Container>
    </>
  )}
/>
)
export default Layout
