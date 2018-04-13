import React from "react"
import Price from "./price"
import { Link } from "react-router-dom"
import "./product-page.css"

class ViewProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: null
    }
  }

  componentDidMount() {
    const productID = this.props.match.params.productID
    console.log("productID", productID)
    fetch(`https://api.tictail.com/v1.26/stores/5HSQ/products/${productID}`)
      .then(respons => respons.json())
      .then(respons => {
        this.setState({ product: respons })
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    console.log(this.state.product)
    if (!this.state.product) {
      return <p>The product is loading...</p>
    }

    return (
      <div className="product-container">
        <img src={this.state.product.images[0].url} alt="" />
        <h5>{this.state.product.title}</h5>
        <p>{this.state.product.description}</p>
        <button className="button">Add to bag</button>
        <Price product={this.state.product} />
      </div>
    )
  }
}
export default ViewProduct
