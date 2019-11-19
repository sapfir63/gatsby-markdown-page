import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

import styled from "styled-components";

import { colors } from "../utils/vars";
  
const Header = styled.header`
  width: 100%;
  height: 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.main};
  color: ${colors.textSecond};
  padding: 0.5em;
`;

const Logo = styled.img`
  border-radius: 50%;
  height: 100%;
`;

const logoLink = `height: 100%;`;

export default () => (
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
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                tag
              }
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
      },
      allMarkdownRemark: { 
        edges
      },
    }) => (
         // Extract tag data from query  
      //    const tags = result.data.tagsGroup.group 
     <Header>
        <Link to="/"  css={logoLink}>
          <Logo src= {publicURL} alt="logo" />
        </Link>
        {
          edges.map(({
            node: { 
              frontmatter: {
                tag
              }
            }
            })=> (<Link to={tag} >{tag}</Link>
            )
          )
        }
             That is header 
      </Header>
    )}
  />
);