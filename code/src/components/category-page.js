import React from "react"
import Category from "./category-menu"
import "./category-page.css"

class CategoryPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // allProducts: [],
      allCategories: []
    }
  }

  componentDidMount() {}

  fetch("https://api.tictail.com/v1.26/stores/5HSQ/categories")
    .then(respons => respons.json())
    .then(respons2 => {
      this.setState({ allCategories: respons2 })
    })

  render() {
    return <div />
  }
}

export default CategoryPage
