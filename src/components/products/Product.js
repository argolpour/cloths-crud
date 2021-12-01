import { Link } from "react-router-dom"
const Product = ({product}) => {
    return (
      <div className="product-block-box">
        <img src={product.image} alt={product.title}/>
        <p className="title">{product.title}</p>
        <p className="price">{product.price}</p>
        <Link className="navigate-link" to={`/product/${product.id}?title=${product.category}`} target="_blank"></Link>
       
     </div>
  
    )
}

export default Product
