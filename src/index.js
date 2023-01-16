//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { NavBar } from "./component/navbar";
import { Body } from "./component/body";
import { Footer } from "./component/footer";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.min.css";

//include your index.scss file into the bundle
import "./index.css";

import cardImg from "./img/286x180.jpg";


//render your react application
ReactDOM.render(
	<div>
		<NavBar /> <Body /> <Footer />
	</div>,
	document.querySelector("#app")
);