import React, { Component } from 'react'

import '../App.css';

class MenuItem extends Component {
	
  handleClick(item) {
    this.props.orderItem(item);
  }

	render(){
		return(			
			
      <li> 

        { this.props.itemName.name }  &nbsp;&nbsp; <b> ${ this.props.itemName.price }  </b>                
        
        <button type="button" class="btn btn-success pull-right btn-xs" onClick= { this.handleClick.bind(this,this.props.itemName) }>Add</button> 

      </li> 
        
		)
	}

}

export default MenuItem