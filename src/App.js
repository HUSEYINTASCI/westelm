import React, { Component } from 'react'
import './style/App.scss';
import data from './data.json';
import Product from './Product'
import Detail from './Detail'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgset: [],
      imgmin: 0,
      imgmax: 0,
      DetailImageUrl: '',
    }
  }

   

    render() {
      return (
        <div>
         
        </div>
      )
    }
  }
  
  export default App