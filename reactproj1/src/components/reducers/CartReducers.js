let cartData= [];
export function cartReducer(state=cartData, action){
    switch(action.type){
        case "ADD_TO_CART":
        //add an element
            console.log("CART: added to cart")
            state = [...state, action.payload];
            return state;
        case "REMOVE_FROM_CART":
        //add an element
            console.log("CART: added to cart")
            let p = state.filter((cart)=> cart.id!==action.payload.id)
            return p;
        default:
            return state;
    }
}