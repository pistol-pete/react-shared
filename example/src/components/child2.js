import React from 'react'
import shared from '../shared'

export default class extends React.Component {
	render(){
		// console.log('child'+this.props.childNumber+' rendered')
		const ready = shared.state.innerchild_data.ready
		const value = shared.state.innerchild_data.value
		return (
			<div className="child">
				<div className="header">Another Child{this.props.childNumber}</div>
				{ready ? 
					value ? <div>innerchild_data: {value}</div> : <br/>
					:
					<div>Loading...</div>}

			</div>
		)
	}

}