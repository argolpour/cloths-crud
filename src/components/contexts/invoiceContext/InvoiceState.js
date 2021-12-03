import InvoiceContext from './InvoiceContext'
import { useReducer } from 'react';
import { GET_INVOICES} from './../Types';
import InvoiceReducer from './InvoiceReducer';
const InvoiceState = ({children}) => {
    const initialState={
       invoices:[]      
    }
    const [state, dispatch] = useReducer(InvoiceReducer, initialState)
    //.........get Invoices..........
    const getInvoices=async()=>{
        const response=await fetch('http://localhost:5000/invoices')
        const data=await response.json();
        dispatch({type:GET_INVOICES,payload:data})
    }
   
        //.........create Invoice..........
        const createInvoice=async(values)=>{
            const response=await fetch('http://localhost:5000/Invoices',{
                method:"POST",
                body:JSON.stringify(values),
                headers:{
                    "Content-type":"Application/json"
                }
            })
            return response;
        }

      
     

    return (
       <InvoiceContext.Provider value={{...state,getInvoices,createInvoice}}>
           {children}
       </InvoiceContext.Provider>
    )
}

export default InvoiceState
