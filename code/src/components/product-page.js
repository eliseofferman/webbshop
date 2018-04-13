import React from "react"
import { Link } from "react-router-dom"
import Price from "./price"
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
    fetch(`https://api.tictail.com/v1.26/stores/5HSQ/products/${productID}`)
      .then(respons => respons.json())
      .then(respons => {
        this.setState({ product: respons })
      })
      .catch(error => {
        console.log(error)
      })
  }

	buyProduct = () => {
	  console.log("hello")
	  console.log(this.state.product)
	  const productID = this.state.product.id
	  const variationID = this.state.product.variations[0].id

	  return fetch(`https://api.tictail.com/v1.26/carts/${this.props.cart.token}/items`, {
	    method: "POST",
	    headers: {
	      "content-type": "application/json"
	    },
	    body: JSON.stringify({
	      product_id: productID,
	      variation_id: variationID,
	      quantity: 1
	    })
	  })
	    .then(respons => respons.json())
	    .then(json => {
	      console.log("test", json)
	      this.props.updateCart()
	      // window.location.replace(`https://tictail.com/checkout?cart_token=${this.props.cart.token}`)
	    })
	}
	render() {
	  if (!this.state.product) {
	    return <p>The product is loading...</p>
	  }
	  console.log(this.props)
	  return (
	    <div className="product-container">
	      <Link to="/"> Home </Link>
	      <img src={this.state.product.images[0].url} alt="" />
	      <h5>{this.state.product.title}</h5>
	      <p>{this.state.product.description}</p>
	      <button className="button" onClick={this.buyProduct}>
					Add to bag
	      </button>
	      <Price product={this.state.product} />
	    </div>
	  )
	}
}
export default ViewProduct
