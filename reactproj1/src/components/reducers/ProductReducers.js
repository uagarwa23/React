/*let productsData = [
    {
        "id":1,
        "name":"Camera",
        "price":"5000"
    },
    {
        "id":2,
        "name":"Laptop",
        "price":"50000"
    },
    {
        "id":3,
        "name":"toys",
        "price":"300"
    },
    {
        "id":4,
        "name":"cycle",
        "price":"1250"
    }
]*/
let productsData = [];
export function productReducer(state=productsData, action){
    switch(action.type){
        case "ADD_TO_CART":
            console.log("product producer::: add to cart")
            let p = state.filter((product)=> product._id!==action.payload.id)
            return p;
        case "ADD_PRODUCT":
            console.log("product producer::: add product")
            state = [...state, action.payload]
            return state;
        case "DELETE_PRODUCT":
            console.log("product producer::: delete product")
            let index  = state.findIndex((e)=>e._id=== action.payload)
            state = [...state.slice(0,index),...state.slice(index+1)]
            return state;
        case "UPDATE_PRODUCT":
            console.log("product producer::: update product")
            //let p = state.filter((product)=> product.id==action.payload.id)

            let ix  = state.findIndex((e)=>e._id=== action.payload._id)
            state = [...state.slice(0,ix),...state.slice(ix+1)]

            state = [...state,action.payload]
            return state;
        case "GET_PRODUCT":
            console.log("get product reducer::: get product", action.payload)
            //state = [...state,action.payload]

            return [...action.payload];
        case "REMOVE_FROM_CART":
            //add an element
                console.log("CART: added to cart")
                state = [...state, action.payload];
                return state;
        default:
        console.log("default")
            return state;
    }
}
