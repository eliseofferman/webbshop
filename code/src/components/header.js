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
          {" "}
          <img src={logo} />{" "}
        </Link>

        {/* <div> */}
        <img src={logoCactus} />
        <h2>Catus</h2>
        {/* </div> */}
      </div>
    )
  }
}

export default Header
