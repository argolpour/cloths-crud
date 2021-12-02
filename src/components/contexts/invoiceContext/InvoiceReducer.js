import {GET_INVOICES,DELETE_INVOICE} from './../Types';
const InvoiceReducer=(state,action)=>{

    switch (action.type) {
        case GET_INVOICES:
            return ({...state,invoices:action.payload})
            
      default:
          return state;
      
    }
}
export default InvoiceReducer