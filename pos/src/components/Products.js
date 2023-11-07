import { Component } from 'react';
export default class Products extends Component {
    constructor(){
        super();
        this.state = {
            products:[]
        }
    }
    loadProducts(){
        let products = JSON.parse(localStorage.getItem('products'))
        this.setState({products})
    }
  render() {
    return (<div>
      <div className='products'>
        {this.state.products.map((product)=>(
        <div className='product'>
        <span className='prName'>{product}</span>
        <button action='add'>+</button>
      </div>    
        ))}        
      <button className='addproduct'>Add Product</button>
      </div>
    </div>)
  }
}