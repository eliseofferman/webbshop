import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import "./category-menu.css"

class Category extends React.Component {
  renderCategorys() {
    const htmlCategoryes = this.props.categorys.map(categoryItem => <div>{categoryItem.title}</div>)

    return htmlCategoryes
  }
  render() {
    return (
      <div className="category-left">
        <h5>Categorys</h5>
        <Link to="/products"> {this.renderCategorys()} </Link>
      </div>
    )
  }
}

export default Category
