//home component JSX
import React,{Component} from "react"
import ProductList from "./shopping/ProductList"
import CartItems from "./shopping/CartItems"


export default class RouteComponents extends Component{
    render(){
        return(<div className="row">
        <div className="col-sm-6">
            <ProductList/>
        </div>
        <div className="col-sm-6 well">
           <CartItems/>
        </div>
    </div>)
    }
}

