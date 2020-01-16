import React, { Component } from 'react'
import './style/App.scss';
import data from './data/data.json'
import Product from './Product'
import Detail from './Detail'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageSet: [],
      imageIndex: 0,
      maxImageIndex: 0,
      detailImageUrl: '',
    }
  }

  handleProductClick = productId => {
    const detailImageData = data.groups.find(product => {
      return product.id === productId
    })

    this.setState({
      imageSet: detailImageData.images,
      maxImageIndex: detailImageData.images.length,
      detailImageUrl: detailImageData.images[0].href,
    })

    const detailBubbleContainer = document.getElementById('bubble-container')

    detailImageData.images.forEach(image => {
      const bubbleDiv = document.createElement('div')
      bubbleDiv.className = 'bubble'
      detailBubbleContainer.appendChild(bubbleDiv)
    })

    const bubbleList = document.getElementsByClassName('bubble')
    bubbleList[0].className += ' current-bubble'

    // Show detail
    const detail = document.getElementsByClassName('detail')[0]
    detail.style.display = 'block'
  }

  componentDidMount() {
 
    const productData = data.groups

    const products = productData.map(product => {
      const productName = product.name
      const productregprice = `Regular: $${
        product.priceRange.regular.low
      } - $${product.priceRange.regular.high}`
      const productselprice = `Selling: $${
        product.priceRange.selling.low
      } - $${product.priceRange.selling.high}`
      const productId = product.id
      const productImageUrl = product.hero.href
      return (
        <Product
          key={productId}
          imageUrl={productImageUrl}
          description={productName}
          regprice={productregprice}
          selprice={productselprice}
          onClick={() => this.handleProductClick(productId, productData)}
        />
      )
    })

    this.setState({ products: products })

    const detail = document.getElementsByClassName('detail')[0]
    window.onclick = e => {
      if (e.target === detail) {
        detail.style.display = 'none'
        this.setState({ imageSet: [], imageIndex: 0, maxImageIndex: 0 })

        const detailBubbleContainer = document.getElementById('bubble-container')
        while (detailBubbleContainer.firstChild) {
          detailBubbleContainer.removeChild(detailBubbleContainer.firstChild)
        }
      }
    }
  }

  incrementImage = e => {
   
    const bubbleList = [...document.getElementsByClassName('bubble')]
    const maxImageIndex = this.state.maxImageIndex
    const currenImageIndex = this.state.imageIndex
    if (maxImageIndex > currenImageIndex + 1) {
      const newImageIndex = this.state.imageIndex + 1
      this.setState({
        detailImageUrl: this.state.imageSet[newImageIndex].href,
        imageIndex: newImageIndex,
      })

      // Remove bubbles from the detail
      bubbleList.forEach((bubble, index) => {
        if (index === currenImageIndex + 1) {
          bubble.classList.add('current-bubble')
        } else {
          bubble.classList.remove('current-bubble')
        }
      })
    }
  }

  decrementImage = e => {
    const bubbleList = [...document.getElementsByClassName('bubble')]
    const currenImageIndex = this.state.imageIndex
    if (currenImageIndex > 0) {
      const newImageIndex = this.state.imageIndex - 1
      this.setState({
        detailImageUrl: this.state.imageSet[newImageIndex].href,
        imageIndex: newImageIndex,
      })

      // Remove bubbles from the detail
      bubbleList.forEach((bubble, index) => {
        if (index === currenImageIndex - 1) {
          bubble.classList.add('current-bubble')
        } else {
          bubble.classList.remove('current-bubble')
        }
      })
    }
  }

  close = () => {
    this.setState({
      imageSet: [],
      imageIndex: 0,
      maxImageIndex: 0,
      showdetail: false,
    })

    const detailBubbleContainer = document.getElementById('bubble-container')
    while (detailBubbleContainer.firstChild) {
      detailBubbleContainer.removeChild(detailBubbleContainer.firstChild)
    }

    const detail = document.getElementsByClassName('detail')[0]
    detail.style.display = 'none'
  }

  render() {
    return (
      <div>
  <canvas></canvas>
        <Detail
          className="detail"
          imageUrl={this.state.detailImageUrl}
          close={this.close}
          rightclick={this.incrementImage}
          leftclick={this.decrementImage}
        />
        <div className="container">{this.state.products}</div>
      </div>
    )
  }
}

  
  export default App;