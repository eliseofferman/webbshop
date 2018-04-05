import React from "react"

class ListProducts extends React.Component {

  renderproducts() {
    console.log(this.props)
  }

  render() {
    return (

      <div className="ListProducts">
        {this.renderproducts()}
        
      </div>

  )
}

}

export default ListProducts
