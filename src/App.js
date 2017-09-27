import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import MenuItem from './components/MenuItem';
import OrderItem from './components/OrderItem';
//import { Button } from 'react-bootstrap';
import data from './data.json'

console.log(data);

class App extends Component {
  constructor(props) {
      super(props);
    
      this.state = {
         menuItems: data.items,
         orderItems: data.items,
         total : 0 
      }
   }

  handleClick(item) {
           
    this.state.orderItems.findIndex((i) => {
      if (i.id === item.id){
        i.quantity++;                      
      }      
    })

    //var newtotal = this.state.total + item.price;

    
    this.setState({      
      menuItems : this.state.menuItems,      
      orderItems : this.state.orderItems,
      total : this.state.total + item.price                   
    });

      //console.log(this.state.menuItems);
      //console.log(this.state.orderItems); 
  }


  render() {

    let orders = this.state.orderItems.map((order) => {
        return(
                <ul>
                  <OrderItem key={order.id} orderName={order} />
              </ul>
        )
    })


    let items = this.state.menuItems.map((item)=>{
      //console.log(item.id);
    return(
        <ul>
          <MenuItem key={item.id} itemName={item} orderItem={this.handleClick.bind(this)} />
        </ul>
      )
    })



    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">Welcome to Food Order App</h1>
        </header>
        <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>Menu</h1>
                  {items}
              </div>
              <div className="col-md-6">
                <h1>Order</h1>
                {orders}
              </div>             
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-offset-6">
                  Total : { this.state.total }
                </div>
            </div> 
        </div>
      </div>
    );
  }

}

export default App;
