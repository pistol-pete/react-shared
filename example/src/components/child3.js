import React from 'react'

export default class extends React.Component {
	render(){
		console.log('rendered unregistered child')
		return (
			<div>unregistered</div>
		)
	}

}