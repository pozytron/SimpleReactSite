import React from 'react';
import Navigation from "../Navigation/"; 

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

export default Footer
