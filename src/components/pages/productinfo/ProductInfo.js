import { useContext,useEffect } from "react"
import { useParams,Link,useLocation } from "react-router-dom"
import productContext from "../../contexts/productContext/productContext"
import Product from "../../products/Product"
import {styles} from './styles'
import '../../products/Product.css'
const ProductInfo = () => {
    const {id}=useParams()
    const search = useLocation().search;
    const category = new URLSearchParams(search).get('title');
    const {getProduct,product,getProductbyCategory,recommendedProduct} = useContext(productContext)
    const classes=styles()

    useEffect(() => {
        getProduct(id);
        getProductbyCategory(category,id)
        // eslint-disable-next-line   
    }, [])

      
    return (
        <div className={classes.container}>
        <div className={classes.productWrapper}>
         <div className={classes.productImage}>
             <img src={product.image} alt={product.title}/>
         </div>
         <div  className={classes.productInfo}>
             <h2>{product.title}</h2>
             <h3>{product.category}</h3>
             <p>{product.description}</p>
             <div className={classes.rate}>
             <h4><strong >Price:<span className="color-red">{product.price} $</span></strong></h4>
             { <h4><strong>Rate:<i className="fas fa-star"></i>{product?.rating?.rate}</strong></h4>}
             </div>
             <Link to={`/login?productid=${id}`} className="btn btn-primary btn-block">Buy</Link>
             <Link to="/" className="btn btn-success btn-block">Back</Link>
        </div>
        </div>
        <div className={classes.recommendedWrapper}>
            {recommendedProduct.map(product=><Product key={product.id} product={product}/>)}
        </div>
        </div>
    )
}

export default ProductInfo
