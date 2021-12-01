import { Link } from "react-router-dom"
const Product = ({product}) => {
    return (
        <Link to={`/product/${product.id}?title=${product.category}`}><div className="product-block-box">
        <img src={product.image} alt={product.title}/>
        <p className="title">{product.title}</p>
        <p className="price">{product.price}</p>
       
     </div>
     </Link>
    )
}

export default Product
