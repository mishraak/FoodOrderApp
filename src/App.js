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

  handleAdd(item) {
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
      console.log(this.state.orderItems); 
  }


    handleRemove(item) {
    this.state.orderItems.findIndex((i) => {
      if (i.id === item.id){
        i.quantity--;                      
      }      
    })

    //var newtotal = this.state.total + item.price;

    this.setState({      
      menuItems : this.state.menuItems,      
      orderItems : this.state.orderItems,
      total : this.state.total - item.price                   
    });

      //console.log(this.state.menuItems);
      console.log(this.state.orderItems); 
  }

  render() {

    let orders = this.state.orderItems.map((order) => {
        return(
                <ul class="list-group">
                  <OrderItem key={order.id} orderName={order} orderItem={this.handleRemove.bind(this)} />
              </ul>
        )
    })


    let items = this.state.menuItems.map((item)=>{
      //console.log(item.id);
    return(
        <ul class="list-group">
          <MenuItem key={item.id} itemName={item} orderItem={this.handleAdd.bind(this)} />
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
            <br></br>
            <br></br>
            <div className="row">
                <div className="col-md-2 col-sm-offset-10">
                  <h3><b>Total :${ this.state.total }</b></h3>
                </div>
            </div> 
        </div>
      </div>
    );
  }

}

export default App;
