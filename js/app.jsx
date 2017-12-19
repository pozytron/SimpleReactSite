import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  hashHistory
} from 'react-router';

class Header extends React.Component{
  render(){
    return <header>
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
  }
}
class Slider extends React.Component {
  render(){
    return <section>
      <ul>
        <li><h2>Pierwszy slajd</h2><button> Kliknij se!</button></li>
        <li><h2>Drugi slajd</h2><button> Kliknij se!</button></li>
        <li><h2>Trzeci slajd</h2><button> Kliknij se!</button></li>
        <li><h2>Czwarty slajd</h2><button> Kliknij se!</button></li>
      </ul>
    </section>
  }
}

class Main extends React.Component{
  render(){
    return <div id="main">
              <Header/>
              <Slider />
            <section>
            </section>
            <section>
            </section>
            <section>
            </section>
            <section>
            </section>
            <footer>
            </footer>
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
