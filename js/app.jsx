import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  hashHistory
} from 'react-router';

// import components
import Footer from "./components/Footer/"
import Navigation from "./components/Navigation/"
import Header from "./components/Header/"
import GaleryStripe from "./components/GaleryStripe/"
import ArticlePreview from "./components/ArticlePreview/"
import Slider from "./components/Slider/"
import VideoSection from "./components/VideoSection/"
import StaffSection from "./components/StaffSection/"


class Main extends React.Component{
  render(){
    return <div id="main">
              <Header/>
              <Slider />
              <GaleryStripe />
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
