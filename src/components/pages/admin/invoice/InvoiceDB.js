import { useEffect,useContext } from "react"
import { Link } from "react-router-dom"
import InvoiceContext from "../../../contexts/invoiceContext/InvoiceContext"
const InvoiceDB = () => {
    const {getInvoices,invoices}=useContext(InvoiceContext)
    useEffect(() => {
        getInvoices()
        // eslint-disable-next-line
    }, [])
    return (
        <div className="product-wrapper">
        <div className="actions ">
        <Link to="/admin" className="btn btn-primary ">Back</Link>
               
        </div>
       
        <ul className="list-group">
        {invoices.map(invoice=><li className="list-group-item d-flex justify-content-start" key={invoice.id}><span className="mr-3">{invoice.id} </span>    <strong className="mr-3">{invoice.customerfullname}</strong>     <strong className="mr-3">{invoice.producttitle}</strong>      <strong className="ml-auto mr-5 ">{invoice.createdAt}</strong>      <strong>{invoice.totalamount} $</strong>   </li>)}
        </ul>
    </div>
    )
}

export default InvoiceDB
