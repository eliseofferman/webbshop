import React from "react"
import { Link } from "react-router-dom"
import Product from "./product"
import "./list-products.css"

class ListProducts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allProducts: [],

      categoryNumber: null
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

      .map(product => (
        <Link to={`/product/${product.id}`}>
          <Product item={product} />
        </Link>
      )) // Skapa div
    // invinseble return before <

    return products
  }

  render() {
    const categoryName = this.props.match.params.categoryXXX

    const nrOfProducts = this.renderproducts(categoryName).length

    return (
      <div>
        <Link to={`/categories/${categoryName}`}>
          <h4>
            {categoryName}({nrOfProducts})
          </h4>
        </Link>
        <div className="list-products">{this.renderproducts(categoryName)}</div>
      </div>
    )
  }
}

export default ListProducts
