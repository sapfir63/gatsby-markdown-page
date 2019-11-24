import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Layout from "../components/layout"
import '../styles/react-tabs.css';
//import '../styles/bootstap.min.css';

export default () => (
	<StaticQuery query = {graphql`{
		allFile(filter: {name: {eq: "mount"}}) {
			totalCount
			edges {
				node {
					id
				}
			}
		}
	}
	`}
	//	const { allFile } = data // data.markdownRemark holds your post data
	//	const { childMarkdownRemark, html } = markdownRemark
		render={({ allFile}) => (
		<Layout>
			<h1>Услуги</h1>
			<Tabs>
				<TabList>
					<Tab>Монтаж печатных плат</Tab>
					<Tab>Комплектация</Tab>
					<Tab>Проектирование</Tab>
					<Tab>Настройка</Tab>
				</TabList> 

				<TabPanel>
						totalCount {allFile.totalCount}
						

						{allFile.edges.map(({ node: { id } }) => (
						 id 
						))
						}					

					
				</TabPanel>
				<TabPanel>
					<h2>Any content 2</h2>
				</TabPanel>
			</Tabs>
		</Layout >
		)}
	/>
);

// export default () => (
//   <StaticQuery
//     query={graphql`
//       {
//         allSitePage {
//           edges {
//             node {
//               id
//               path
//             }
//           }
//         }
//       }
//     `}
//     render={({ allSitePage: { edges } }) => (
//       <ul>
//         {edges.map(({ node: { id, path } }) => (
//           <li key={id}>
//             <Link to={path}>{id}</Link>
//           </li>
//         ))}
//       </ul>
//     )}
//   />
// );