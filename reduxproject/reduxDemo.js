const redux = require("redux")
const test = require("./reduxDemo2")

const createStore = redux.createStore;


//Define a reducer
let mathReducer = (state=0,action)=>{
   /* if(action.type == "INCREMENT"){
        return state+1;
    }else if(action.type == "ADD"){
        return state+action.payload;
    }else{
        return 10;
    }*/
    switch(action.type){
        case "INCREMENT":
            return state+1;
        case "ADD":
            return state+action.payload;
        default:
            return 10;       

    }
    
}
//create strore w math reducer
let myStore = createStore(mathReducer);

console.log("Redux Sample!!! TESTa")
console.log("Initial state is:", myStore.getState());

function increament(){
    return {type: "INCREMENT"}
}

function add(val){
    return {type:"ADD", payload:val}
}

//observe state changes
myStore.subscribe(()=>{
    console.log("current state is:",myStore.getState())
})

//dispatch action

myStore.dispatch({type:"INCREMENT"})
myStore.dispatch(increament())
myStore.dispatch({type:"ADD", payload:9})
myStore.dispatch({type:"ADD", payload:1})
myStore.dispatch(add(4))