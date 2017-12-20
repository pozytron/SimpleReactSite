import React from "react";

class Homepage extends React.Component {
  render(){
    return <div>
              {this.props.children}
           </div>
  }
}

export default Homepage
