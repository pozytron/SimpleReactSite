import React from 'react';
import {IndexLink} from 'react-router';

class Navigation extends React.Component{
  render(){
    return <ul className="navbar-nav">
            <li className="nav-item">
              <IndexLink className="nav-link" to="/">Home</IndexLink>
            </li>
            <li className="nav-item">
              <IndexLink className="nav-link" to="/blog">Blog</IndexLink>
            </li>
            <li className="nav-item">
              <IndexLink className="nav-link" to="/about">About</IndexLink>
            </li>
        </ul>
  }
}
export default Navigation
