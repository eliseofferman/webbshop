import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import ListProducts from "./list-products.js"
import Category from "./category-menu"
import Header from "./header"
import ViewProduct from "./product-page"
import "./app.css"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allCategories: [],
      cart: null
    }
  }

  componentDidMount() {
    fetch("https://api.tictail.com/v1.26/stores/5HSQ/categories")
      .then(respons => respons.json())
      .then(respons2 => {
        this.setState({ allCategories: respons2 })
      })
      .catch(error => {
        console.log(error)
      })
    fetch("https://api.tictail.com/v1.26/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        store_id: "5HSQ",
        attribution: "marketplace"
      })
    })
      .then(respons => respons.json())
      .then(respons => {
        console.log(respons)

        this.setState({ cart: respons })
      })
  }
	updateCart = () => {
	  fetch(`https://api.tictail.com/v1.26/carts/${this.state.cart.token}`)
	    .then(respons => respons.json())
	    .then(respons => {
	      console.log(respons)

	      this.setState({ cart: respons })
	    })
	}

	render() {
	  console.log(this.state)
	  return (
	    <BrowserRouter>
	      <div className="main-container">
	        <Header />

	        {this.state.cart && (
	          <a href={`https://tictail.com/checkout?cart_token=${this.state.cart.token}`}>
	            {" "}
	            {this.state.cart.items.length}{" "}
	          </a>
	        )}
	        <div className="container-wrapper">
	          <div className="top-container">
	            <Category categorys={this.state.allCategories} />
	          </div>

	          <div className="content">
	            <Route exact path="/" component={ListProducts} />
	            <Route path="/category/:categoryXXX" component={ListProducts} />
	            <Route
  path="/product/:productID"
  render={props => (
	                <ViewProduct cart={this.state.cart} updateCart={this.updateCart} {...props} />
	              )} />
	          </div>
	        </div>
	      </div>
	    </BrowserRouter>
	  )
	}
}

export default App
