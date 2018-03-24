import React from "react";
import BotCollection from "./BotCollection.js";
import YourBotArmy from "./YourBotArmy.js";
import BotSpecs from "../components/BotSpecs.js";

class BotsPage extends React.Component {
	//start here with your code for step one
	state = {
		bots: "",
		army: "",
		cardCliked: false,
		botSpecs: ""
	};

	collectBots = yourBot => {
		if (this.state.army.includes(yourBot)) {
			const results = this.state.army.filter(bot => bot !== yourBot);
			this.setState({
				army: results
			});
		} else {
			this.setState({
				army: [...this.state.army, yourBot]
			});
		}
	};

	isClicked = bot => {
		this.setState({
			cardCliked: !this.state.cardCliked,
			botSpecs: bot
		});
	};

	componentDidMount() {
		fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
			.then(res => res.json())
			.then(response => {
				this.setState({
					bots: response
				});
			});
	}

	render() {
		return (
			<div>
				<YourBotArmy yourBots={this.state.army} army={this.collectBots} />
				{!this.state.cardCliked ? (
					<BotCollection allBots={this.state.bots} clicked={this.isClicked} />
				) : (
					<BotSpecs
						bot={this.state.botSpecs}
						clicked={this.isClicked}
						army={this.collectBots}
					/>
				)}
			</div>
		);
	}
}

export default BotsPage;
