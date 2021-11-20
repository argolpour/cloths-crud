import { useContext ,useEffect} from 'react';
import productContext from '../contexts/productContext/productContext';
import Product from './Product';
import ReactPaginate from "react-paginate";
const Products = () => {
    const {getProducts,products,count}=useContext(productContext)
    useEffect(() => {
        getProducts(1)
        // eslint-disable-next-line
    }, [])
    const handlePageClick=(data)=> {
      let currentPage=data.selected+1;
     getProducts(currentPage)
    }
    return (
        <>
        <div className="product-block">
        
         {products.map(product=><Product key={product.id} product={product}/>)}   
        </div>
        <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={Math.ceil(count/8) }
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
        
        />
        </>
    )
}


export default Products
