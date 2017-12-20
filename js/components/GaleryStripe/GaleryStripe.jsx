import React from 'react';

class GaleryStripe extends React.Component {
  render(){
    return <section className="row">
      <div className="col-3"><a href="http://pl.pokemon.wikia.com/wiki/Charizard"><img src="../images/pic1.png" alt="charizard"/></a></div>
      <div className="col-3"><a href="http://pl.pokemon.wikia.com/wiki/Bulbasaur"><img src="../images/pic2.png" alt="bulbasaur"/></a></div>
      <div className="col-3"><a href="http://pl.pokemon.wikia.com/wiki/Psajdak"><img src="../images/pic3.png" alt="Psajdak"/></a></div>
      <div className="col-3"><a href="http://pl.pokemon.wikia.com/wiki/Pikachu"><img src="../images/pic4.png" alt="Pikachu"/></a></div>
    </section>
  }

}

export default GaleryStripe
