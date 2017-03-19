import { createStore } from "redux";
//Action methods
const incrementAction = ()=>{
	return {type:"INC"};
}
//Action methods
const decrementAction = ()=>{
	return {type:"DEC"};
}
//reducer
const reducer = (initialState=0, action) => {
  if (action.type === "INC") {
    return initialState + 1;
  } else if (action.type === "DEC") {
    return initialState - 1;
  }
  return initialState;
}
//store
const store = createStore(reducer)
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
