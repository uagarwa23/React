import React,{Component} from "react"
import {connect} from "react-redux"

class ProductList extends Component{
    render(){
        let output = null;
        console.log("product list>>>>", this.props.products)
        if(this.props.products.length > 0){
            output = this.props.products.map((product) =>{
                return(
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td><button className="btn btn-primary" onClick={()=>this.props.addToCart(product)}>Add to Cart</button></td>                    
                    </tr>
                )
            })
        }else{
            output = <tr><td colSpan="3">No Products available</td></tr>
        }
        return (
            <div>
                 <h3> List of products: </h3>
                <table className="table table-bordered">
                    <thead>                    
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {output}
                    </tbody>
                </table>
            </div>
        )
    }
}
function mapStateToProps(state){
    return ({products: state.productReducer})
}

function mapDispatchToProps(dispatch){
    return(
        {
            addToCart: (product)=>{
                let orderedItem = {id:product.id, name:product.name, price:product.price, quantity:1}
                dispatch({type:"ADD_TO_CART",payload:orderedItem})
            }
        }

    );
} 

export default connect(mapStateToProps, mapDispatchToProps) (ProductList)