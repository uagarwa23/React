/*import Point from "./module1"
import {Point3D} from "./module1"
import

console.log("hello Uma.")

//instance of a Point class
let c1 = new Point(4,10)
c1.display();

let c2 = new Point3D(4,10,12)
c2.display();*/

import React from "react"
import ReactDOM from "react-dom"

//define element
//now: <div id="root">First App.</div>
//to: <div id="root"><u>My First React Example</u></div>
//let element = React.createElement("u",null, "My First React Example")//class, style, text, using html in javascript//
//OR


//get content of root
let root = document.getElementById("root")
//ReactDOM.render(element,root)

/*ReactDOM.render(
<b>
    <h1>Welcome</h1>
     <p>Wells Fargo</p>
     {12+23}
     {"snoozeeeeeee"}
</b>
,
root) //all emelements must have single parent*/


//define functional component
let MyTag = () => <u>My component</u>;
//render my tag in root area
ReactDOM.render(<MyTag/>,root)



