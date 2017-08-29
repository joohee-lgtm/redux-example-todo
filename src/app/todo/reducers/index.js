import {combineReducers} from "redux";
// import todos from "./todos";
// import visibilityFilter from "./visibilityFilter";

const visibilityFilter = (state = "SHOW_ALL", action) => {
	console.log("visibilityFilter reduces : " + action.type);

	switch (action.type) {
		case "SET_VISIBILITY_FILTER" :
			return action.filter;
		default :
			return state; // return state;
	}
};

const todos = (state = [], action) => {
	console.log("todos reduces : " + action.type);

	switch (action.type) {
		case "ADD_TODO" :
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false,
				},
			];
		case "TOGGLE_TODO" :
			return state.map(todo => {
				const toggled = todo.id === action.id;

				return toggled ? {...todo, completed: !todo.completed} : todo;
			});
		default :
			return state;
	}
};


const todoApp = combineReducers({
	todos,
	visibilityFilter
});

export default todoApp;
