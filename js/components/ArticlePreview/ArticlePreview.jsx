import React from 'react';

class ArticlePreview extends React.Component {
  render(){
    return   <section className="row">
      <div className="col-1"></div>
      <div className="col-3">
        <img src="../images/morda.jpg" alt="morda"/>
      </div>
      <div className="col-1"></div>
      <div className="col-6">
        <h2>To jest tytuł artykułu</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dui a dolor imperdiet sodales quis mollis ipsum. Sed ut elit at metus pretium ornare. Vivamus id tincidunt elit. Curabitur fringilla nec odio sit amet luctus. Etiam at urna volutpat justo dignissim ullamcorper. Vivamus ut lobortis lectus, nec elementum lectus. Aliquam volutpat gravida risus. Nunc arcu massa, viverra tincidunt tempus a, placerat a diam. Nunc sit amet purus id nisi accumsan aliquet. Suspendisse viverra pulvinar metus, et pharetra tortor tincidunt vel.</p>
      </div>
      <div className="col-1"></div>
      </section>
  }
}

export default ArticlePreview
