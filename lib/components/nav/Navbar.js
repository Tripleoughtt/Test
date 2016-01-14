
import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router"

class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  render(){
    return(
      <div>
        <Link role="button" className="btn" to="blog"> TO DA BLOGGGG </Link>
        <Link role="button" className="btn" to="/">HEADED HOME BITCHESSSSS</Link>
      </div>
    )
  }
}

export default Navbar;
