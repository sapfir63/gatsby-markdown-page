import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

import styled from "styled-components";

import { colors } from "../utils/vars";
  
const Header = styled.header`
  height: 15em;
  width: 100%;
  background-color: ${colors.main};
  color: ${colors.textSecond};
  padding: 0.5em;
`;

const Logo = styled.img`
  border-radius: 50%;
  height: 50%;
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
          group(field: frontmatter___tag) {
            fieldValue
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
        edges,
        group
      },
    }) => (
         // Extract tag data from query  
      //    const tags = result.data.tagsGroup.group 
        <Header>           

        {/* {
          edges.map(({
            node: { 
              frontmatter: {
                tag
              }
            }
            })=> (<Link to="{tag}" >{tag}</Link>
            )
          )
        }, }
        {/* {
          group.map(({
            fieldValue
          }) => (
              <Link to={fieldValue} >{fieldValue}</Link>
           ))
        } */}
                   
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* <a class={logoLink}   href="#"><Logo src= {publicURL} alt="logo" /></a> */}
          <Link to="/"  css={logoLink}>
            <Logo src= {publicURL} alt="logo" />
          </Link> 
          {/* <a class={logoLink} href="#"><img src={publicURL} /></a> */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Продукция
                </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    {
                      group.map(({
                        fieldValue
                      }) => (
                          <Link className="dropdown-item" to={fieldValue} >{fieldValue}</Link>
                      ))
                    }
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>

          </div>
        </div>
        </nav>
      </Header>
    )}
  />
);