import React from "react"
import ListProducts from "./list-products.js"

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
      <div>
        <ListProducts products={this.state.allProducts} text="test test" user={[0, 1, 2, 3]}/>

        <h1>Find me in src/app.js!</h1>
        <h3> All products</h3>
        <h4>Category</h4>
        <p>bla bla bla</p>
      </div>
    )
  }

}

export default App
