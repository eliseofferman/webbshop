import React from "react"
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
      <div>
        <h1>{this.state.product.title}</h1>
        <h4>{this.state.product.description}</h4>
        <img src={this.state.product.images[0].url} alt="" />
      </div>
    )
  }
}
export default ViewProduct
