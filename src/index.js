import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

import cardImg from "./img/286x180.jpg";

const NavBar = props => {
  return (
    //NAVBAR
    <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Start bootstrap</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a className="nav-link active" aria-current="page" href="#">
              Home
						</a>
            <a className="nav-link" href="#">
              About
						</a>
            <a className="nav-link" href="#">
              Services
						</a>
            <a className="nav-link" href="#">
              About
						</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

function JumboTron() {
  return (
    <div className="jumbotron">
      <h1 className="display-4">A Warm Welcome!</h1>
      <p className="lead">
        Exercitation laborum aliquip laborum officia fugiat eiusmod commodo Lorem. Magna ad mollit elit adipisicing sunt excepteur excepteur ex ullamco. Ad id ad sit mollit consectetur elit cillum consectetur sunt incididunt. Amet cillum sit veniam id ut excepteur. Mollit non in amet non ea. Qui minim sunt reprehenderit qui eiusmod eiusmod. Aute laborum anim Lorem deserunt mollit ut.
			</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Call to Action!
				</a>
      </p>
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <img className="card-img-top" src={cardImg} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Quis enim consequat irure consectetur incididunt laboris sit ea enim quis pariatur. Dolore irure cillum ullamco est eu veniam et qui labore ea quis magna mollit. Et sit occaecat sunt ex voluptate do amet veniam consequat. Ad Lorem aute culpa magna laboris reprehenderit consectetur amet. Cillum do officia exercitation duis qui fugiat nostrud veniam nisi do incididunt do. Pariatur magna cillum officia excepteur.
				</p>
        <a href="/" className="btn btn-primary">
          Find Out More
				</a>
      </div>
    </div>
  );
}

const Body = props => {
  return (
    <div className="container">
      <div className="row">{JumboTron()}</div>
      <div className="row">
        <div className="col">{Card()}</div>
        <div className="col">{Card()}</div>
        <div className="col">{Card()}</div>
        <div className="col">{Card()}</div>
      </div>
    </div>
  );
};
function Footer() {
  return (
    <div className="Container-fluid">
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container footer">footer</div>
      </div>
    </div>
  );
}

//render your react application
ReactDOM.render(
  <div>
    <NavBar /> 
    <Body /> 
    <Footer />
  </div>,
  document.querySelector("#app")
);
