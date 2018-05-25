import React, {Component} from "react"
import {connect} from "react-redux"
import axios from "axios"


class ManageProducts extends Component{
    constructor(){
        super();
        this.apiURL = "http://localhost:3000/wsproducts"
    }
    componentDidMount(){
        axios.get(this.apiURL).then(
            (response)=>{
                this.props.getProducts(response.data)
            },(err)=>{
                console.log("Failure",err)
            }
        )
    }
    render(){
        let output = null;
        console.log("product list>>>>", this.props.mgProducts)
        if(this.props.mgProducts.length > 0){
            output = this.props.mgProducts.map((product) =>{
                return(
                    <tr key={product._id}>
                        <td>{product._id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>                      
                        <td><button className="btn btn-danger" onClick={()=>this.handleDelete(product._id)}>Delete</button>
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
                    <input type="text" ref="pid" placeholder="Enter Product Id" readOnly="true"/>&nbsp;
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
        let newProduct = {name:this.refs.pname.value, price:this.refs.price.value}
        axios.post(this.apiURL, newProduct).then(
            (res)=>{
                this.props.addProduct(res.data)
            },(err)=>{
                console.log("error occured in POST")
            }
        )
        
    }
    handleDelete=(id)=>{
        axios.delete(this.apiURL+"/"+id).then(
            (res)=>{
                console.log("delete success")
                this.props.deleteProduct(id)
            },(err)=>{
                console.log("error occured in DELETE")
            }
        )
        
    }
    handleEdit=(product)=>{
        this.refs.pid.value = product._id;
        this.refs.pname.value = product.name;
        this.refs.price.value = product.price
    }
    handleUpdate=()=>{
        let uProduct = {_id:this.refs.pid.value,name:this.refs.pname.value, price:this.refs.price.value};
        let i = this.refs.pid.value
        axios.put(this.apiURL+"/"+i, uProduct).then(
            (res)=>{
                console.log("update success")
                this.props.updateProduct(uProduct)                
            },(err)=>{
                console.log("error occured in DELETE")
            }
        )
        
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
            },
            getProducts: (products)=>{
                dispatch({type:"GET_PRODUCT",payload:products})
            }
        }

    );
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageProducts)

