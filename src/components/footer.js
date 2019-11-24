import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { colors } from "../utils/vars"


const Footer = styled.section`
	height: 50px;
	margin-top: 2em;
	background-color: ${colors.second};
	color: ${colors.textMain};
`

export default () => (
	<Footer>	© {new Date().getFullYear()}, Built with
	{` `}
	<a href="https://www.gatsbyjs.org">Gatsby</a>
	
	</Footer>

)