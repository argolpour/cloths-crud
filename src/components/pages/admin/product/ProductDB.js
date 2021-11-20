import './productDB.css'
import { useContext ,useEffect} from 'react';
import ReactPaginate from "react-paginate";

import productContext from './../../../contexts/productContext/productContext';
import { Link } from 'react-router-dom';

const ProductDB = () => {
    const {getProducts,products,deleteProduct,count}=useContext(productContext)
    useEffect(() => {
        getProducts(1)
                // eslint-disable-next-line
    }, [])
    const removehandler=(id)=>{
        deleteProduct(id)
        getProducts()

    }
    const handlePageClick=(data)=> {
        let currentPage=data.selected+1;
       getProducts(currentPage)
      }
 
    return (
        <>
        <div className="product-wrapper">
            <div className="actions ">
            <Link to="/admin" className="btn btn-primary ">Back</Link>
            <Link to="/create-product" className="btn btn-primary ">Create</Link>
           
            </div>
           
            <ul className="list-group">
            {products.map(product=><li className="list-group-item d-flex" key={product.id}> <img src={product.image} alt={product.title} style={{width:"30px",height:"30px",marginRight:"5px"}}/>{product.title}<Link className="ml-auto" to={`/edit-product/${product.id}`}><i className="far fa-edit  mr-3"></i></Link> <i className="far fa-trash-alt" onClick={()=>{removehandler(product.id)}}/></li>)}
            </ul>
        </div>
           <ReactPaginate
           previousLabel={"<<"}
           nextLabel={">>"}
           breakLabel={"..."}
           pageCount={Math.ceil(count/8) }
           marginPagesDisplayed={2}
           pageRangeDisplayed={3}
           onPageChange={handlePageClick}
           containerClassName={"pagination justify-content-center "}
           pageClassName={'page-item '}
           pageLinkClassName={'page-link bg-dark text-light'}
           previousClassName={'page-item'}
           nextClassName={'page-item'}
           previousLinkClassName={'page-link bg-dark text-light'}
           nextLinkClassName={'page-link bg-dark text-light'}
           breakClassName={'page-item'}
           breakLinkClassName={'page-link'}
           activeClassName={' active'}
           />
           </>
           
    )
}

export default ProductDB
