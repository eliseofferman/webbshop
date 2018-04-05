import React from "react"
import ListProducts from "./list-products.js"

import Header from "./header"
import "./app.css"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allProducts: []
    }
  }

  componentDidMount() {
    fetch("https://api.tictail.com/v1.26/stores/5HSQ/products")
      .then(respons => respons.json())
      .then(respons => {
        this.setState({ allProducts: respons })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="main-container">
        <Header />
        <ListProducts products={this.state.allProducts} />
      </div>
    )
  }
}

export default App
