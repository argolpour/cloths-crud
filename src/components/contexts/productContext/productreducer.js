import { Get_PRODUCT ,DELETE_PRODUCT} from './../Types';
const productReducer = (state,action) => {
  switch (action.type) {
  case Get_PRODUCT:
  return ({...state,products:action.payload})
  case DELETE_PRODUCT:
    return ({...state,products:state.products.filter(product=>product.id!==action.payload)})
 
      default:
          return state;
  }
}

export default productReducer
