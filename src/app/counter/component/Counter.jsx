import React from "react";
import {connect} from "react-redux";

class Counter extends React.Component {
	render() {
		console.log("counter render");
		return <h1> value : {this.props.value} </h1>;
	}
}

const mapStateToProps = state => {
	console.log("counter mapStateToProps");
	return ({
		value: state.counter.value
	});
};

// connect : react component 를 redux store 에 연결한다
// props 를 store 의 데이터에 연결시켜주는 다른 함수를 리턴
// 리턴된 함수에 컴포넌트를 인수로 넣어 실행하면, 기존 컴포넌트를 수정하는게 아니라 새로운 컴포넌트를 리턴
Counter = connect(mapStateToProps)(Counter);

// mapStateToProps :state 를 컴포넌트의 props 에 매핑시켜준다
// mapDispatchToProps: 컴포넌트의 특정 함수형 props 를 실행했을때 개발자가 지정한 action 을 dispatch 하도록 함

export default Counter;
