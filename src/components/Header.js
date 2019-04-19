import React, { Component } from "react"
import { NavLink } from "react-router-dom"

import "./Header.css"

class Header extends Component {
  render() {
    return (
      <div className="Header-header">
        <NavLink exact to="/" activeClassName="selected" className="link">
          Home
        </NavLink>
        <NavLink to="/signin" activeClassName="selected" className="link">
          History
        </NavLink>
        {/* <div className="Header-link">Link</div>
        <div className="Header-link">Link</div>
        <div className="Header-link">Link</div> */}
      </div>
    )
  }
}

export default Header
