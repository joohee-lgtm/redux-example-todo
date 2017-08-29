import React from "react";
import Counter from "./Counter";
import Buttons from "./Buttons";
import Options from "./Options";

class App extends React.Component {
	render() {
		return (
			<div style={{textAlign: "center"}}>
				<Counter />
				<Buttons />
				<Options />
			</div>
		);
	}
};

export default App;
