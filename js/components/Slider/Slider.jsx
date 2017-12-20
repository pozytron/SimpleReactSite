import React from 'react';

class Slider extends React.Component {
  render(){
    return <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./../../../images/first.png" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h3>Pierwszy Slajd</h3>
            <p><button> Kliknij se!</button></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="./../../../images/second.png" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h3>Drugi Slajd</h3>
            <p><button> Kliknij se!</button></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="./../../../images/third.png" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h3>Trzeci Slajd</h3>
            <p><button> Kliknij se!</button></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="./../../../images/fourth.png" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h3>Czwarty Slajd</h3>
            <p><button> Kliknij se!</button></p>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
   </div>

  }
}
export default Slider
