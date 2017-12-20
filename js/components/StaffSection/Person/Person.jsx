import React from 'react';

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

export default Person
