const redux = require("redux")
const store = redux.createStore;
let mathReducer = (state = {count:100}, action) =>{
    if(action.type=="INCREMENT"){
        state.count++
        return state
    }else {
        return state
    }
}

let myStore = store(mathReducer);
console.log("Initial state is:", myStore.getState());

myStore.subscribe(()=>{
    console.log("Current state is:", myStore.getState());
}
)

myStore.dispatch({type:"INCREMENT"})


