import CustomerContext from './../../contexts/customer/CutomerContext';
import productContext from './../../contexts/productContext/productContext';
import invoiceContext from './../../contexts/invoiceContext/InvoiceContext'
import { useContext, useEffect,useState } from 'react';
import { useParams,useLocation,useNavigate } from 'react-router-dom';
import {styles} from './styles.js'
import moment from 'moment';

const Invoice = () => {

    const [quantity , setQuantity] = useState(0)
    
    const {getCustomer,customer} =useContext(CustomerContext)
    const {getProduct,product}=useContext(productContext)
    const {createInvoice}=useContext(invoiceContext)
    const {id}=useParams()
    const navigate=useNavigate()
    const search=useLocation().search
    const productid=new URLSearchParams(search).get('productid')
    const classes=styles()
    const date=new Date(Date.now())
    const [cost, setCost] = useState(product.price)
    const [values, setValues] = useState({
        customerfullname:``,
        customeraddress:"",
        customertel:"",
        producttitle:"",
        productquantity:0,
        totlalamount:0,
        createdAt:moment(date).format('YYYY-MM-DD')
    })
    useEffect(() => {
       getCustomer(id)
       getProduct(productid)
      
        setValues({
            customerfullname:`${customer.firstname} ${customer.lastname}`,
            customeraddress:customer?.address?.address,
            customertel:customer.tel,
            producttitle:product.title,
            productquantity:quantity,
            totlalamount:Math.ceil(quantity*product.price) ,
            createdAt:moment(date).format('YYYY-MM-DD')
        })
      
    
       
        // eslint-disable-next-line
    }, [])
    useEffect(() => {
        setValues({...values,
            customerfullname:`${customer.firstname} ${customer.lastname}`,
            customeraddress:customer?.address?.address,
            customertel:customer.tel,
            producttitle:product.title,
            productquantity:quantity,
            totlalamount:Math.ceil(quantity*product.price) ,
            createdAt:moment(date).format('YYYY-MM-DD')
        })
    }, [quantity])
    const onchangeHandler=(e)=>{
  
       
    }
       const submitHandler=()=>{
           console.log(quantity);
        if (+quantity===0){
            alert("please set the quantity")

        }else {
           createInvoice(values)
        navigate("/")
        }
           
      

    }
  
    return (
        <div className={classes.invoiceWrapper}>
            <div className={classes.invoiceInfo}>
               
                <h2>Invoice</h2>
                <span>Invoice Date:  <strong> {moment(date).format('YYYY-MM-DD')} </strong></span>
            </div>
          <div className={classes.customerInfo}>
            <span>FullName: <strong>{`${customer.firstname} ${customer.lastname}`}</strong></span>
            <div className={classes.customerContactInfo}></div>
            <span>Adrress: <strong>{`${customer?.address?.address} ${customer.lastname}`}</strong></span>
            <span>Tell: <strong>{customer.tel}</strong></span>
            </div> 
          <div className={classes.productInfo}>
              <div className={classes.productImage}>
                  <img src={product.image}/>
              </div>
              <div className={classes.product}>
                  <h4>{product.title}</h4>
                 Quantity: <input className="form-control" type="number"  value={quantity} onChange={e=>{setQuantity(e.target.value)}}/>
                 <p>Invoice Total Mount: <strong>{Math.ceil(quantity*product.price) } $</strong></p>
                 <button className="btn btn-primary btn-block" onClick={submitHandler}>Save</button>
              </div>
          </div>

        </div>
    )
}

export default Invoice
