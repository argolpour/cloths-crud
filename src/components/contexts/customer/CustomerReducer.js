import {GET_CUSTOMERS,DELETE_CUSTOMER, GET_CUSTOMER} from './../Types';
const CustomerReducer=(state,action)=>{

    switch (action.type) {
        case GET_CUSTOMERS:
            return ({...state,customers:action.payload})
            case GET_CUSTOMER:
                return ({...state,customer:action.payload})
            case DELETE_CUSTOMER:
                return ({...state,customers:state.customers.filter(customer=>customer.id!==action.payload)})
      default:
          return state;
      
    }
}
export default CustomerReducer