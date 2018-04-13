import React from "react"
import Price from "./price"
import "./product.css"

class Product extends React.Component {
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

    return (
      <div className="product">
        <div className="product-title">{item.title}</div>
        <Price product={item} />
        <div className="product-image">
          <img src={imagelink} alt="" />
        </div>
      </div>
    )
  }
}
export default Product
