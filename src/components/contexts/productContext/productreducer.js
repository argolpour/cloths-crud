import { Get_PRODUCT ,DELETE_PRODUCT, GET_SINGLE_PRODUCT,GET_RECOMMENDED_PRODUCT} from './../Types';
const productReducer = (state,action) => {
  switch (action.type) {
  case Get_PRODUCT:
    return ({...state,products:action.payload,count:action.totalCount})
    case GET_SINGLE_PRODUCT:
      return ({...state,product:action.payload})
      case GET_RECOMMENDED_PRODUCT:
        return ({...state,recommendedProduct:action.payload})
  case DELETE_PRODUCT:
    return ({...state,products:state.products.filter(product=>product.id!==action.payload)})
 
      default:
          return state;
  }
}

export default productReducer
