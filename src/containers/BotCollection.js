import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

	handleClick = e => {
		this.props.clicked(e);
	};

	render() {
		return (
			<div className="ui four column grid">
				<div className="row">
					{this.props.allBots
						? this.props.allBots.map(bot => {
								return <BotCard key={bot.id} bot={bot} armyBot={this.handleClick} />;
						  })
						: null}
				</div>
			</div>
		);
	}
}

export default BotCollection;
