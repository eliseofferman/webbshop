import React from "react"

class ListProducts extends React.Component {
  renderproducts() {
    const products = this.props.products.map(item => (
      <div>
        {item.title} {item.price}
        <img src={item.images[0].url} />
      </div>
    ))

    return products
  }

  render() {
    return <div className="ListProducts">{this.renderproducts()}</div>
  }
}

export default ListProducts
