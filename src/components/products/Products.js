import { useContext ,useEffect} from 'react';
import productContext from '../contexts/productContext/productContext';
import Product from './Product';
const Products = () => {
    const {getProducts,products}=useContext(productContext)
    useEffect(() => {
        getProducts()
        // eslint-disable-next-line
    }, [])
    return (
        <div className="product-block">
        
         {products.map(product=><Product key={product.id} product={product}/>)}   
        </div>
    )
}


export default Products
