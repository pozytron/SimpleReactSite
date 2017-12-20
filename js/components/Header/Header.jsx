import React from 'react';
import Navigation from "../Navigation/";

class Header extends React.Component{
  render(){
    return  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="col-3">
                  <a className="navbar-brand" href="#">
                    <img src="../images/logo-zajebiste.png" alt="to jest logo"/>
                  </a>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <Navigation />
                </div>
            </nav>



  }
}

export default Header
