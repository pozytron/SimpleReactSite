import React from 'react';
import Navigation from "../Navigation/";

class Header extends React.Component{
  render(){
    return <header className="row">
      <div className="col-3">
      <a href="/"><img src="../images/logo-zajebiste.png" alt="to jest logo"/></a>
      </div>
      <div className="col-9">
      <Navigation/>
      </div>
    </header>
  }
}

export default Header
