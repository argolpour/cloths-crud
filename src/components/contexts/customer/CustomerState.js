import CustomerContext from './CutomerContext';
import { useReducer } from 'react';
import {  GET_CUSTOMERS, DELETE_CUSTOMER, GET_CUSTOMER } from './../Types';
import CustomerReducer from './CustomerReducer';
const CustomerState = ({children}) => {
    const initialState={
       customers:[],
       customer:{}
    }
    const [state, dispatch] = useReducer(CustomerReducer, initialState)
    //.........get Customers..........
    const getCustomers=async()=>{
        const response=await fetch('http://localhost:5000/customers')
        const data=await response.json();
        dispatch({type:GET_CUSTOMERS,payload:data})
    }
    //.........get Customer..........
    const getCustomer=async(id)=>{
        const response=await fetch(`http://localhost:5000/customers/${id}`)
        const data=await response.json();
        dispatch({type:GET_CUSTOMER,payload:data})
    }
        //.........create Customer..........
        const createCustomer=async(values)=>{
            const response=await fetch('http://localhost:5000/customers',{
                method:"POST",
                body:JSON.stringify(values),
                headers:{
                    "Content-type":"Application/json"
                }
            })
            return response;
        }

        //...............delete customer.......
        const deleteCustomer=async(id)=> {
        const response=await fetch(`http://localhost:5000/customers/${id}`,{
            method:"DELETE"
        })
        dispatch({type: DELETE_CUSTOMER,payload:id})
        return response;
        }
         //...............Update Customer.......
         const updateCustomer=async(values,id)=>{
             const response=fetch(`http://localhost:5000/Customer/${id}`,{
                 method:"PUT",
                 body:JSON.stringify(values),
                 headers:{
                     "Content-type":"Application/json"
                 }
             })
             return response;
         }

    return (
       <CustomerContext.Provider value={{...state,getCustomers,getCustomer,createCustomer,deleteCustomer,updateCustomer}}>
           {children}
       </CustomerContext.Provider>
    )
}

export default CustomerState
