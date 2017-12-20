import React from 'react';

class Slider extends React.Component {
  render(){
    return <section className="row">
      <ul>
        <li><h2>Pierwszy slajd</h2><button> Kliknij se!</button></li>
        <li><h2>Drugi slajd</h2><button> Kliknij se!</button></li>
        <li><h2>Trzeci slajd</h2><button> Kliknij se!</button></li>
        <li><h2>Czwarty slajd</h2><button> Kliknij se!</button></li>
      </ul>
    </section>
  }
}
export default Slider
