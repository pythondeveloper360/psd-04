import './App.css'
import { Component } from 'react';
import Products from './components/Products';
export default class App extends Component {
  render() {
    return (<div>
      <Products/>
      <div className='selected'></div>
    </div>)
  }
}