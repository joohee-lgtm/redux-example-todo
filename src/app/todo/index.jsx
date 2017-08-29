import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import todoApp from "./reducers";
import App from "./components/App.jsx";

const store = createStore(todoApp);

const installTodo = root => {
	render(
		<Provider store={store}>
			<App />
		</Provider>,
		root
	);
};

export default installTodo;