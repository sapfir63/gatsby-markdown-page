/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Sidebar from "./sidebar";
import Footer from "./footer";
import "../styles/layout.css"
import "../styles/bootstrap.min.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Helmet>
        <script src="../js/jquery-3.3.1.js"></script>

        <script src="../js/bootstrap.min.js"></script>
        </Helmet>

      <div  class="container-fluid">
        <div class="row">
            <Header />  
        </div>
        <div class="row">
          <div class="col-3">
            <div class="row">
              <Sidebar />    
              </div>   
            <div class="row">  
              Sidebar2
            </div>
          </div> 
          <div class="col-6"> 
            <main>{children}</main>
          </div> 
        </div> 
        <div class="row">
          <div class="col"> 
            <Footer />
            </div> 
          </div> 
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
