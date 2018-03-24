import React, { Component } from "react";
import { Card, Col } from "react-materialize";
import { Route, Link } from "react-router-dom";

class MastersContainer extends Component {
	render() {
		console.log("container", this.props.masters);
		return (
			<Col s={12} m={5}>
				{this.props.masters
					? this.props.masters.map(master => {
							// return master.name
							return (
								<Card
									className="blue-grey darken-1"
									textClassName="white-text"
									title={master.name}
									actions={[
										<Link to={"/masters/" + master.name}>This is a link</Link>
									]}>
									{master.description}
								</Card>
							);
					  })
					: null}
			</Col>
		);
	}
}

export default MastersContainer;
