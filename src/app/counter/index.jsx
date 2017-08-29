import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./component/App";
import counterApp from "./reducers";

const store = createStore(counterApp);

const installCounter = root => {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		root
	);
};

export default installCounter;