import React, { Component } from 'react'

class OrderItem extends Component {

	render(){
		return(			
			<li> { this.props.orderName.name }  { this.props.orderName.quantity } </li> 
		)
	}
}

export default OrderItem