import React from "react"
import logo from "./ticktail-logo.png"
import "./header.css"

class Header extends React.Component {
  render() {
    return (
      <div className="header-image">
        <img src={logo} />
      </div>
    )
  }
}

export default Header
