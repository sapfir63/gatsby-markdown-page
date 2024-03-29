  import React from "react"
  import { Link, StaticQuery, graphql } from "gatsby"
  import styled from "styled-components"

  import { colors } from "../utils/vars"

   const Sidebar = styled.section`

    background-color: ${colors.second};
    color: ${colors.textMain};
  `

   const navItem = `
  
     align-items: center;
     margin: 0 1em 0 2em;
     padding: 0.5em 0;
     border-bottom: 0.05em solid ${colors.mainHalf};
     postion: relative;
     color: ${colors.textBody}; 

    &:before {
      content: '';
      transition: 0.5s;
      width: 0.5em;
      height: 0.5em;
      position: absolute;
      left: 0.8em;
      border-radius: 50%;
      display: block;
      background-color: ${colors.main};
      transform: scale(0);
    }

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      &:before {
        transform: scale(1);
      }
    }
   `

export default () => (
  <StaticQuery
    query={graphql`
        {
          tagsGroup: allMarkdownRemark {
            group(field: frontmatter___tag) {
              fieldValue
            }
          }
        }
      `}
    render={({
      allMarkdownRemark: {
        group
      }
    }) =>
      (
        <Sidebar>
          {
            group.map(({ field: { frontmatter___tag: { fieldValue } } }) =>
              (            
                { fieldValue }
              )           
            )   
          }
      </Sidebar>
      )         
    }  
  />
);