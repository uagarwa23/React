import React,{Component} from "react"
import {connect} from "react-redux"

class CartItems extends Component{
    render(){
        let op = null;
        console.log("cart list>>>>", this.props.cart.length)
        if(this.props.cart.length>0){
            op = this.props.cart.map(
                (item)=>{
                    return <tr key={item.id}>
                    <td><button className="btn btn-danger btn-xs" onClick={()=>this.props.removeFromCart(item)}>X</button></td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>  
                        <td>{item.quantity}</td>
                        <td>{item.price * item.quantity}</td> 
                        </tr>           
               }
            )
        }else{
            op = <tr><td colSpan="5">No Product available</td></tr>
        }
        return (
            <div>
                <h3> Total Cart items: <span className="label label-primary">{this.props.cart.length}</span></h3>
                <table className="table table-bordered">
                    <thead>                    
                    <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Amount</th>
                    </tr>
                    </thead>
                    <tbody>{op}
                     
                    <tr>
                            <td colSpan="4"><b>Sum to pay:</b></td>
                            <td><b>{this.totalAmt()}</b></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    totalAmt = ()=>{
        let total = 0;
        for(let e of this.props.cart){
            total += e.price *e.quantity
        }
        return total;
    }
    addItem = (item)=>{
        let quan = item.quantity+1;
        return quan;
    }
}

function mapStateToProp(state){
    return({cart:state.cartReducer});
}

function mapDispatchToProps(dispatch){
    return(
        {
            removeFromCart: (cart)=>{
                let removedItem = {id:cart.id, name:cart.name, price:cart.price, quantity:cart.quantity, ammount:(cart.price * cart.quantity)}
                dispatch({type:"REMOVE_FROM_CART",payload:removedItem})
            }
        }

    );
} 
export default connect(mapStateToProp,mapDispatchToProps)(CartItems)
