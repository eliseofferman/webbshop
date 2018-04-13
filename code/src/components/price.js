import React from "react"
import "./price.css"

class Price extends React.Component {
  render() {
    if (this.props.product.sale_active) {
      return (
        <span>
          <span className="original-price"> $ {this.props.product.original_price / 100} </span>
          <span className="sales-price"> $ {this.props.product.price / 100} </span>
        </span>
      )
    } else {
      return <span className="price"> $ {this.props.product.price / 100}</span>
    }
  }
}
export default Price
