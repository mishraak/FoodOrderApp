import React, { Component } from 'react'

import '../App.css';

class OrderItem extends Component {

handleClick(order) {
    this.props.orderItem(order);
  }

	render(){
		return(			
			<li> 
				{ this.props.orderName.name } &nbsp;&nbsp; <b> { this.props.orderName.quantity } </b>
				<button type="button" class="btn btn-danger pull-right btn-xs" onClick= { this.handleClick.bind(this,this.props.orderName) }>Remove</button> 
			</li> 

	


		)
	}
}

export default OrderItem