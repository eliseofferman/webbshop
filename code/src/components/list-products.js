import React from "react"
import Product from "./product"
import "./list-products.css"

class ListProducts extends React.Component {
  renderproducts() {
    console.log(this.props.products)
    const products = this.props.products.map(item => <Product item={item} />) // Skapa div
    // invinseble return before <

    return products
  }

  render() {
    return <div className="list-products">{this.renderproducts()}</div>
  }
}

export default ListProducts
