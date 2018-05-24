import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import {BrowserRouter} from "react-router-dom"
import {createStore} from "redux"
import {Provider} from "react-redux"
import appReducers from "./components/reducers"

let r = document.getElementById("root")
//ReactDOM.render(<App />,r)


//multiple reducers
//combineReducers

//let appStore = createStore(productReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let appStore = createStore(appReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
   
    <Provider store = {appStore}>
        <BrowserRouter>       
            <App />        
        </BrowserRouter>
    </Provider>
    ,r
)


