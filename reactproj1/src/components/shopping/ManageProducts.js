import React, {Component} from "react"
import {connect} from "react-redux"


class ManageProducts extends Component{
    render(){
        let output = null;
        console.log("product list>>>>", this.props.mgProducts)
        if(this.props.mgProducts.length > 0){
            output = this.props.mgProducts.map((product) =>{
                return(
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>                      
                        <td><button className="btn btn-danger" onClick={()=>this.handleDelete(product.id)}>Delete</button>
                        <button className="btn btn-success" onClick={()=>this.handleEdit(product)}>Edit</button></td>  

                    </tr>
                )
            })
        }else{
            output = <tr><td colSpan="3">No Products available</td></tr>
        }
        return (
            <div>
                 <h3> Manage Products: </h3>
                 <form className="well">
                    <input type="text" ref="pid" placeholder="Enter Product Id"/>&nbsp;
                    <input type="text" ref="pname" placeholder="Enter Product Name"/>&nbsp;
                    <input type="text" ref="price" placeholder="Enter Product Price"/>&nbsp;
                    <button type="button" className="btn btn-primary" onClick={this.handleAdd}>Add</button>
                    <button type="button" className="btn btn-primary" onClick={this.handleUpdate}>Update</button>
                </form>
                <table className="table table-bordered">
                    <thead>                    
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {output}
                    </tbody>
                </table>
            </div>
        )
    }
    handleAdd=()=>{
        console.log("add product")
        let newProduct = {id:this.refs.pid.value, name:this.refs.pname.value, price:this.refs.price.value}
        this.props.addProduct(newProduct)
    }
    handleDelete=(id)=>{
        this.props.deleteProduct(id)
    }
    handleEdit=(product)=>{
        this.refs.pid.value = product.id;
        this.refs.pname.value = product.name;
        this.refs.price.value = product.price
    }
    handleUpdate=()=>{
        let uProduct = {id:this.refs.pid.value, name:this.refs.pname.value, price:this.refs.price.value}
        this.props.updateProduct(uProduct)
    }
    
}
function mapStateToProps(state){
    return {
        mgProducts: state.productReducer
    }
}

function mapDispatchToProps(dispatch){
    return(
        {
            addProduct: (newProduct)=>{                
                dispatch({type:"ADD_PRODUCT",payload:newProduct})
            },
            updateProduct: (uProduct)=>{                
                dispatch({type:"UPDATE_PRODUCT",payload:uProduct})
            },
            deleteProduct: (id)=>{
                dispatch({type:"DELETE_PRODUCT",payload:id})
            }
        }

    );
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageProducts)

