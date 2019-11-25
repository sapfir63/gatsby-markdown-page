import PropTypes from "prop-types"
import React from "react"
//import logoSrc from "../images/logo.png";

import styled from "styled-components"
import { colors } from "../utils/vars"
import { Link, StaticQuery, graphql } from "gatsby";

const Logo = styled.img`
  border-radius: 50%;
  height: 100%;
`
const logoLink = `
  height: 100%;
`

const Header = () => (
  <StaticQuery
    query={graphql`
      {
        allFile(filter: { name: { eq: "logo" } }) {
          edges {
            node {
              publicURL
            }
          }
        }
      }
    `}
    render={({
      allFile: {
        edges: [
          {
            node: { publicURL }
          }
        ]
      }
    }) => (
        <header
          style={{             
              height: `3em`,
              display: `flex`, 
              justifyContent: `space-between`,
              alignItems: `center`,
              backgroundColor: `${colors.main}`,
              color: `${colors.textSecond}`
          }}
        >

        <Link to="/" css={logoLink}>
          <Logo src={publicURL} alt="logo" />
        </Link>
              That is header
        </header>

      )}
      />
);


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header