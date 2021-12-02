import InvoiceContext from './InvoiceContext'
import { useReducer } from 'react';
import { GET_INVOICES,DELETE_INVOICE} from './../Types';
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
    // //.........get Customer..........
    // const getInvoice=async(id)=>{
    //     const response=await fetch(`http://localhost:5000/invoices/${id}`)
    //     const data=await response.json();
    //     dispatch({type:GET_CUSTOMER,payload:data})
    // }
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

        //...............delete Invoice.......
        const deleteInvoice=async(id)=> {
        const response=await fetch(`http://localhost:5000/customers/${id}`,{
            method:"DELETE"
        })
        dispatch({type: DELETE_INVOICE,payload:id})
        return response;
        }
        //  //...............Update Customer.......
        //  const updateCustomer=async(values,id)=>{
        //      const response=fetch(`http://localhost:5000/Customer/${id}`,{
        //          method:"PUT",
        //          body:JSON.stringify(values),
        //          headers:{
        //              "Content-type":"Application/json"
        //          }
        //      })
        //      return response;
        //  }

    return (
       <InvoiceContext.Provider value={{...state,getInvoices,createInvoice}}>
           {children}
       </InvoiceContext.Provider>
    )
}

export default InvoiceState
