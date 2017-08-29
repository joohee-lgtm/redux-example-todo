import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";


/**
 * 참고) https://velopert.com/1266
 **/

// action : 어떤 변화가 일어날지 나타내는 객체
const INCREMENT = "INCREMENT";

const increase = diff => ({
	type: INCREMENT, // 필수, action 형태 정의
	addBy: diff
});

// reducer : action 객체를 받았을때 데이터를 어떻게 바꿀지 처리할지 정의하는 객체
const initialState = {
	value: 0
};

const countReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			// srtate 를 변경시키지 않고, state 를 복사한 후에 복사된 객체를 수정하여 반환
			return Object.assign({}, state, {
				value: state.value + action.addBy
			});
		default:
			return state;
	}
};


// store : react.js 프로젝트에서 사용하는 모든 동적 데이터를 담아두는 곳
const store = createStore(countReducer);


// app 컴포넌트
class App extends React.Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	render() {
		let centerStyle = {
			position: "fixed",
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)",
			WebkitUserSelect: "none",
			MozUserSelect: "none",
			MsUserSelect:"none",
			userSelect: "none",
			cursor: "pointer"
		};

		return (<div
			onClick={this.onClick}
			style={centerStyle}
		>
			<h1>{this.props.store.getState().value}</h1>
		</div>);
	}

	onClick() {
		// store.dispatch(ACTION)
		// 상태값을 수정할때 사용하는 메소드
		this.props.store.dispatch(increase(1));
	}
}


const installSimpleCounter = (root) => {

	const render = () => {
		ReactDOM.render(
			<App store={store} />,
			root
		);
	};
	store.subscribe(render);

	render();
}

export default installSimpleCounter;