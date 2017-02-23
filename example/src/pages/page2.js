import React from 'react'
import Layout from '../components/layout'
import Child from '../components/child'
import ResponsiveChild from '../components/responsive-child'

export default class extends React.Component {

	render(){
		// console.log('parent rendered')
		return (
			<Layout>
				<div className="parent">
					<div className="header">Page 2</div>
					<ResponsiveChild/>
					<Child childNumber="1">
					</Child>
				</div>
			</Layout>
		)
	}

}