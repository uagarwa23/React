import React from "react"
import SignIn from "./login/SignIn"
import SignUp from "./login/SignUp"
import {Route, Link,Switch} from "react-router-dom"
import NotFound from "./NotFound";
import RouteComponents from "./routecomponents";
import ManageProducts from "./shopping/ManageProducts"


class App extends React.Component{

    render(){
       // return <div><h3 className="well">Wells Fargo H3</h3><p>this is a paragraph</p></div>
       //    <!--use exact for absolute mapping-->
       return <div>
                    <nav className="navbar navbar-inverse"> 
                        <Link to="/" className="navbar-brand">My Route App</Link> 
                        <ul className="nav navbar-nav">
                            <li><Link to="/" className="navbar-brand">Home</Link> </li>
                            <li><Link to="/signIn" className="navbar-brand">Sign In</Link>   </li>
                            <li><Link to="/signUp" className="navbar-brand">Sign Up</Link> </li>
                            <li><Link to="/manage" className="navbar-brand">Manage Products</Link> </li>
                        </ul>               
                    </nav>      
                    <Switch>      
                    <Route path="/" exact component= {RouteComponents}/> 
                    <Route path="/signIn" component = {SignIn}/>  
                    <Route path="/signUp" component={SignUp}/> 
                    <Route path="/manage" component={ManageProducts}/>   
                    <Route path="*" component={NotFound}/> 
                    </Switch>
                </div>
    }

}
export default App