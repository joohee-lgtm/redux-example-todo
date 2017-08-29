// actions > index
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SET_DIFF = "SET_DIFF";
export const increment = () => {
	console.log("increment - actions");
	return {
		type: INCREMENT
	};
}
export const decrement = () => ({
	type: DECREMENT
});
export const setDiff = value => ({
	type: SET_DIFF,
	diff: value
});
