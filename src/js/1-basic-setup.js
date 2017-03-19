import { createStore , combineReducers } from "redux";
//Action methods
const incrementAction = ()=>{
	return {type:"INC"};
}
//Action methods
const decrementAction = ()=>{
	return {type:"DEC"};
}
//Action methods
const toggleNameAction = (name)=>{
	return {type:"TOGGLE_NAME",
			payload:name};
}


//reducer to increment or decrement counter
const counterReducer = (initialState=0, action) => {
  if (action.type === "INC") {
    return initialState + 1;
  } else if (action.type === "DEC") {
    return initialState - 1;
  }
  return initialState;
}
//reducer to change name
const nameReducer = (initialState={}, action) => {
  if (action.type === "TOGGLE_NAME") {
    return {
    	...initialState,
    	name:action.payload
    }
  }
  return initialState;
}
//store here the state object is {counter, name}
const store = createStore(combineReducers({
	counter:counterReducer,
	name:nameReducer
}))
//store subscribe to notify any change that happens in the state tree or the store
store.subscribe(() => {
  console.log("store changed", store.getState());
})


//dispatch to trigger a change in the state of the application which then calls the reducer and state changes
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(decrementAction())
store.dispatch(decrementAction())
store.dispatch(decrementAction())
store.dispatch(toggleNameAction("pavan"))
