import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import ListProducts from "./list-products.js"
import Category from "./category-menu"
import Header from "./header"
import CategoryList from "./category-list"
import "./app.css"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allProducts: [],
      allCategories: []
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
          <div className="top-container">
            <Category categorys={this.state.allCategories} />
            <ListProducts products={this.state.allProducts} />
          </div>
          {/* <CategoryList /> */}
          <Route exact path="/category/:category" component={CategoryList} />
        </div>


      </BrowserRouter>
    )
  }
}

export default App
