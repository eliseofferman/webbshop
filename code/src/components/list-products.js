import React from "react"
import { Link } from "react-router-dom"
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

  componentWillReceiveProps(nextprop) {
    console.log(nextprop)
  }

  renderproducts(categoryName) {
    const products = this.state.allProducts
      .filter(product => {
        if (!categoryName) {
          return true
        }
        if (categoryName === product.categories[0].title) {
          return true
        }
        return false
      })

      .map(product => <Product item={product} />) // Skapa div
    // invinseble return before <

    return products
  }

  render() {
    // console.log(this.props.products.length)
    console.log(this.props.match.params.categoryXXX)
    const categoryName = this.props.match.params.categoryXXX
    return (
      <div>
        <h4 />
        <Link to="/">
          <h4>All products ({this.state.allProducts.length})</h4>
        </Link>
        <div className="list-products">{this.renderproducts(categoryName)}</div>
      </div>
    )
  }
}

export default ListProducts
