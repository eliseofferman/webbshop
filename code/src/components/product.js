import React from "react"
import "./product.css"

class Product extends React.Component {
  renderPrice() {
    if (this.props.item.sale_active) {
      return (
        <span>
          <span className="original-price"> {this.props.item.original_price / 100} </span>
          <span className="sales-price"> $ {this.props.item.price / 100} </span>
        </span>
      )
    } else {
      return <span className="price">{this.props.item.price / 100}</span>
    }
  }
  render() {
    const placeholderImage =
      "https://packagecontrol.io/readmes/img/e9492f0f82721e4998b1360e409e6fe8affc30bb.png"

    const { item } = this.props
    let hasImage = ""
    if (item.images[0]) {
      hasImage = true
    } else {
      hasImage = false
    }

    let imagelink = ""

    if (hasImage === true) {
      imagelink = item.images[0].url
    } else {
      imagelink = placeholderImage
    }
    console.log(hasImage)

    return (
      <div className="product">
        <div className="product-title">{item.title}</div>
        <div className="product-price"> $ {this.renderPrice()}</div>
        <div className="product-image">
          <img src={imagelink} alt="" />
        </div>
      </div>
    )
  }
}
export default Product
