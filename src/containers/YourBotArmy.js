import React from "react";
import BotCard from "../components/BotCard";
import BotCollection from "./BotCollection";

class YourBotArmy extends React.Component {
	//your bot army code here...

	handleClick = e => {
		this.props.army(e);
	};

	render() {
		return (
			<div className="ui segment inverted olive bot-army">
				<div className="ui five column grid">
					<div className="row bot-army-row">
						{this.props.yourBots
							? this.props.yourBots.map(bot => {
									return <BotCard bot={bot} armyBot={this.handleClick} />;
							  })
							: null}
					</div>
				</div>
			</div>
		);
	}
}

export default YourBotArmy;
