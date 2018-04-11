import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
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
    // console.log(this.props.htmlCategoryes);
    return (
      <div className="category-left">
        <h5>Categorys</h5>
        {this.renderCategorys()}

        {/* <Link to="/category/banana"> banana </Link>
        <Link to="/category/orange"> orange </Link> */}
      </div>
    )
  }
}

export default Category
