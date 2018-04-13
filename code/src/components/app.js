import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import ListProducts from "./list-products.js"
import Category from "./category-menu"
import Header from "./header"
import ViewProduct from "./product-page"
import "./app.css"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allCategories: []
    }
  }

  componentDidMount() {
    fetch("https://api.tictail.com/v1.26/stores/5HSQ/categories")
      .then(respons => respons.json())
      .then(respons2 => {
        this.setState({ allCategories: respons2 })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    console.log(this.state)
    return (
      <BrowserRouter>
        <div className="main-container">
          <Header />
          <div className="container-wrapper">
            <div className="top-container">
              <Category categorys={this.state.allCategories} />
            </div>

            <div className="content">
              <Route exact path="/" component={ListProducts} />
              <Route path="/category/:categoryXXX" component={ListProducts} />
              <Route path="/product/:productID" component={ViewProduct} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
