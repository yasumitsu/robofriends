import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots,
			searchfield: ''
		};
	}
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	};

	render() {
		const filteredRobot = this.state.robots.filter((robot) =>
			robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		);
		return (
			<div className="tc">
				<h1>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<CardList robots={filteredRobot} />
			</div>
		);
	}
}

export default App;
