import React from "react"
import { Link } from "react-router-dom"

class Signin extends React.Component {
  render() {
    return (
      <>
        <div className="signin">Welcome</div>
        <Link to="/signin">History</Link>
      </>
    )
  }
}

export default Signin
