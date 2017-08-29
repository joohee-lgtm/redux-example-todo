import {connect} from "react-redux";
import {toggleTodo} from "../actions";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
	let value;

	console.log(filter);

	switch (filter) {
		case "SHOW_ALL" :
			value = todos;
			break;
		case "SHOW_COMPLETE" :
			value = todos.filter(t => t.completed);
			break;
		case "SHOW_ACTIVE" :
			value = todos.filter(t => !t.completed);
			break;
		default :
	}

	return value;
};

const mapStateToProps = state => {
	console.log("mapStateToProps " +  state.visibilityFilter);

	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	};
};

const mapDispatchToProps = dispatch => ({
	onTodoClick: id => {
		dispatch(toggleTodo(id));
	}
});

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
