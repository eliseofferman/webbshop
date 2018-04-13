import React from "react"
import { Link } from "react-router-dom"
import "./category-menu.css"

class Category extends React.Component {
  renderCategorys() {
    const htmlCategoryes = this.props.categorys.map(categoryItem => (
      <div>
        <Link to={`/category/${categoryItem.title}`}>{categoryItem.title}</Link>
      </div>
    ))
    return htmlCategoryes
  }

  render() {
    return (
      <div className="category-left">
        <h4>Categorys</h4>
        {this.renderCategorys()}
      </div>
    )
  }
}

export default Category
