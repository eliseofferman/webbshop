import React from "react"
import Product from "./product"
import "./list-products.css"

class ListProducts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allProducts: []
      // allCategories: []
    }
  }

  componentDidMount() {
    fetch("https://api.tictail.com/v1.26/stores/5HSQ/products")
      .then(respons => respons.json())
      .then(respons => {
        this.setState({ allProducts: respons })
      })
      .catch(error => {
        console.log(error)
      })
    }

  renderproducts() {
    const products = this.state.allProducts.map(item => <Product item={item} />) // Skapa div
    // invinseble return before <

    return products
  }

  render() {
    // console.log(this.props.products.length)
    return (
      <div>
        <h4>All products ({this.state.allProducts.length})</h4>
        <div className="list-products">{this.renderproducts()}</div>
      </div>
    )
  }
}

export default ListProducts
