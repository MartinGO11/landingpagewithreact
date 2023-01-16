import React from "react";
import { JumboTron } from "./jumbotron";
import { Card } from "./card";
import "../../src/index.css"

export const Body = props => {
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