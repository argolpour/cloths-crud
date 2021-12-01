import CustomerContext from './../../contexts/customer/CutomerContext';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const Invoice = () => {
    const {getCustomer,customer} =useContext(CustomerContext)
    const {id}=useParams()
    useEffect(() => {
       getCustomer(id)
    }, [])
    console.log(customer);
    return (
        <div>
            <h1>{customer.firstname}</h1>
        </div>
    )
}

export default Invoice
