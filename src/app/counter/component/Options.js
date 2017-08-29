import React from "react";
import {connect} from "react-redux";
import {setDiff} from "../actions";

class Options extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			diff: 1,
		};

		this.onChangeDiff = this.onChangeDiff.bind(this);
	}

	render() {
		return (
			<div>
				<input type="text" value={this.state.diff} onChange={this.onChangeDiff} />
			</div>
		);
	}

	onChangeDiff(e) {
		console.log("onChangeDiff");
		let value = e.target.value;

		if (!isNaN(value)) {
			if (value === "") {
				this.setState({diff: 0});
				value = 0;
			} else {
				this.setState({ diff: value });
			}

			this.props.onUpdateDiff(parseInt(value, 10));
		}
	}
};

let mapDispatchToProps = dispatch => ({
	onUpdateDiff: value => dispatch(setDiff(value))
});

Options = connect(undefined, mapDispatchToProps)(Options);

export default Options;

