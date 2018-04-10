import React from "react"
import Product from "./product"
import "./list-products.css"

class ListProducts extends React.Component {
  renderproducts() {
    const products = this.props.products.map(item => <Product item={item} />) // Skapa div
    // invinseble return before <

    return products
  }

  render() {
    // console.log(this.props.products.length)
    return (
      <div>
        <h4>All products ({this.props.products.length})</h4>
        <div className="list-products">{this.renderproducts()}</div>
      </div>
    )
  }
}

export default ListProducts
