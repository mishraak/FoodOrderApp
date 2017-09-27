import React, { Component } from 'react'

class MenuItem extends Component {
	handleClick(item) {

    this.props.orderItem(item);
    /*
    this.state.orderItems.push(event);

    this.setState({      
      menuItems : this.state.menuItems,
      orderItems : this.state.orderItems     
    });

      console.log(this.state.menuItems);
      console.log(this.state.orderItems);

   */
   

  }

	render(){
		return(			
			<li onClick= { this.handleClick.bind(this,this.props.itemName) }> <a href="#" > { this.props.itemName.name }  |  { this.props.itemName.price } </a> </li> 
		)
	}

}

export default MenuItem