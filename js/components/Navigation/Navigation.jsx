import React from 'react';
import {IndexLink} from 'react-router';

class Navigation extends React.Component{
  render(){
    return <nav>
    <ul>
      <li>
        <IndexLink to="/" >Home</IndexLink>
      </li>
      <li>
        <IndexLink to="/blog" >Blog</IndexLink>
      </li>
      <li>
        <IndexLink to="/about" >About</IndexLink>
      </li>
    </ul>
    </nav>
  }
}
export default Navigation
