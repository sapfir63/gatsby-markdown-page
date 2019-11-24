import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Layout from "../components/layout"
import '../styles/react-tabs.css';
//import '../styles/bootstap.min.css';


export default () => (
	<StaticQuery query={graphql`
	query MountQuery {
		allFile(filter: {name: {eq: "mount"}}) {
			totalCount
			edges {
				node {
					id
					childMarkdownRemark {
						html
						frontmatter {
							title
						}
					}
				}
			}
		}
	}
	`}
	
	render={data => (

		<Layout>
			<Tabs>
				<TabList>
	      <Tab>Title 1</Tab>
	      <Tab>Title 2</Tab>
	    	</TabList>

	    	<TabPanel>
					<h2>
						{data.allFile.edges.map(({ node: { childMarkdownRemark: { frontmatter: {title } } } }) => (
							title
						))}
					</h2>
					{data.allFile.totalCount}
					{data.allFile.edges.map(({ node: { id } }) => (
						id
					))}
				
					<div dangerouslySetInnerHTML={{
						__html:
						data.allFile.edges.map(({ node: { childMarkdownRemark: { html } } }) => (
							html
						))

					}} />
				</TabPanel>
				
	    	<TabPanel>
	      	<h2>Any content 2</h2>
	    	</TabPanel>
	
			</Tabs>
		</Layout >
		)}
	/>
);