import React from 'react';
import Navigation from "../Navigation/";

class Header extends React.Component{
  render(){
    return <header>
      <a href="/"><img src="../images/logo-zajebiste.png" alt="to jest logo"/></a>
      <Navigation/>
    </header>
  }
}

export default Header
