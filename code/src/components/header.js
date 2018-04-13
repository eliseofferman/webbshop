import React from "react"
import { Link } from "react-router-dom"
import logo from "./ticktail-logo.png"
import logoCactus from "./cactus.png"
import "./header.css"

class Header extends React.Component {
  render() {
    return (
      <div className="header-image">
        <Link to="/">
          <img src={logo} alt="Tictail" />
        </Link>
        <img src={logoCactus} alt="shopname-logo-cactus" />
        <h1>Cactus</h1>
      </div>
    )
  }
}

export default Header
