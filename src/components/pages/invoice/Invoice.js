import CustomerContext from './../../contexts/customer/CutomerContext';
import productContext from './../../contexts/productContext/productContext';
import { useContext, useEffect } from 'react';
import { useParams,useLocation } from 'react-router-dom';

const Invoice = () => {
    const {getCustomer,customer} =useContext(CustomerContext)
    const {getProduct,product}=useContext(productContext)
    const {id}=useParams()
    const search=useLocation().search
    const productid=new URLSearchParams(search).get('productid')
    console.log(productid);
    useEffect(() => {
       getCustomer(id)
       getProduct(productid)
    }, [])
  
    return (
        <div>
            <h1>{customer.firstname}</h1>
            <h1>{product.title}</h1>

        </div>
    )
}

export default Invoice
