import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  hashHistory
} from 'react-router';
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
class Header extends React.Component{
  render(){
    return <header>
      <a href="/"><img src="../images/logo-zajebiste.png" alt="to jest logo"/></a>
      <Navigation/>
    </header>
  }
}
class GalleryStripe extends React.Component {
  render(){
    return <section>
      <div><a href="http://pl.pokemon.wikia.com/wiki/Charizard"><img src="../images/pic1.png" alt="charizard"/></a></div>
      <div><a href="http://pl.pokemon.wikia.com/wiki/Bulbasaur"><img src="../images/pic2.png" alt="bulbasaur"/></a></div>
      <div><a href="http://pl.pokemon.wikia.com/wiki/Psajdak"><img src="../images/pic3.png" alt="Psajdak"/></a></div>
      <div><a href="http://pl.pokemon.wikia.com/wiki/Pikachu"><img src="../images/pic4.png" alt="Pikachu"/></a></div>
    </section>
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
class ArticlePreview extends React.Component {
  render(){
    return   <section>
      <img src="../images/morda.jpg" alt="morda"/>
      <h2>To jest tytuł artykułu</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dui a dolor imperdiet sodales quis mollis ipsum. Sed ut elit at metus pretium ornare. Vivamus id tincidunt elit. Curabitur fringilla nec odio sit amet luctus. Etiam at urna volutpat justo dignissim ullamcorper. Vivamus ut lobortis lectus, nec elementum lectus. Aliquam volutpat gravida risus. Nunc arcu massa, viverra tincidunt tempus a, placerat a diam. Nunc sit amet purus id nisi accumsan aliquet. Suspendisse viverra pulvinar metus, et pharetra tortor tincidunt vel.</p>
      </section>
  }
}
class VideoSection extends React.Component{
  render(){
    return <section>
      <div>
        <h4> Tutaj w tle jest super wideo! </h4>
      </div>
    </section>
  }
}
class StaffSection extends React.Component{
  render(){
    return <section>
      <Person />
      <Person />
      <Person />
    </section>
  }
}
class Person extends React.Component{
  render(){
    return <div>
      <img/>
      <h5>Jan Kowalski CEO</h5>
      <p>Pracuje z nami bo nikt go nie zatrudnić.</p>
      <div>
      <a href=""><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
      <a href=""><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
      <a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a>
      </div>
    </div>
  }
}
class Footer extends React.Component{
  render(){
    return <footer>
    <div>
      <div>
        <Navigation/>
      </div>
      <div>
        <h5>Zapisz się</h5>
        <input type="email"/><button>ok</button>
        <div>
        <a href=""><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
        <a href=""><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
        <a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
    <div>
      <h5>Ciasteczka</h5>
      <p>Cras sit amet dui a dolor imperdiet sodales quis mollis ipsum. Sed ut elit at metus pretium ornare. Vivamus id tincidunt elit. Curabitur fringilla nec odio sit amet luctus. Etiam at urna volutpat justo dignissim ullamcorper. Vivamus ut lobortis lectus, nec elementum lectus. Aliquam volutpat gravida risus. Nunc arcu massa, viverra tincidunt tempus a, placerat a diam. Nunc sit amet purus id nisi accumsan aliquet. Suspendisse viverra pulvinar metus, et pharetra tortor tincidunt vel.</p>
    </div>
    <div>
    <span>Credencials</span>
    <span>made with love</span>
    </div>
    </footer>
  }
}
class Main extends React.Component{
  render(){
    return <div id="main">
              <Header/>
              <Slider />
              <GalleryStripe />
              <ArticlePreview />
              <VideoSection />
              <StaffSection />
              <Footer/>
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
