import React from 'react'
import Layout from '../components/layout'
import Child from '../components/child'
import Child2 from '../components/child2'
import Child3 from '../components/child3'
import ResponsiveChild from '../components/responsive-child'

export default class extends React.Component {

	render(){
		// console.log('parent rendered')
		return (
			<Layout>
				<div className="parent">
					<div className="header">Page 1</div>
					<ResponsiveChild/>
					<Child childNumber="1">
						<Child childNumber="4">
							<Child childNumber="5">
								<Child childNumber="6">
									<Child childNumber="7">
										<Child childNumber="8">
											<Child childNumber="9">
												<Child childNumber="10">
													<Child childNumber="11">
													</Child>
												</Child>
											</Child>
										</Child>
									</Child>
								</Child>
							</Child>
						</Child>
					</Child>
					<Child childNumber="2"/>
					<Child2 childNumber="3"/>
					<Child3/>
				</div>
			</Layout>
		)
	}

}