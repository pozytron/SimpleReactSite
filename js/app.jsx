import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  hashHistory
} from 'react-router';


class Main extends React.Component{
  render(){
    return <div id="main">
            <header>
              <img src="../images/logo-zajebiste.png" alt="to jest logo"/>
              <nav>
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
            </header>
            

    </div>
  }
}

class Homepage extends React.Component {
  render(){
    return <div>
              {this.props.children}
           </div>
  }
}
class App extends React.Component{
  render(){
    return <Router history={hashHistory}>
      <Route path="/" component={Homepage}>
        <IndexRoute component={Main}/>
      </Route>
    </Router>
  }
}
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
