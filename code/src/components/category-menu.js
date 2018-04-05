import React from "react"
// import "./category-menu.css"

class Category extends React.Component {
  renderCategorys() {
    const htmlCategoryes = this.props.categorys.map(categoryItem => <div>{categoryItem.title}</div>)

    return htmlCategoryes
  }
  render() {
    return <div>{this.renderCategorys()}</div>
  }
}

export default Category
