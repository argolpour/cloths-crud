const Product = ({product}) => {
    return (
        <div className="product-block-box">
        <img src={product.image} alt={product.title}/>
        <p className="title">{product.title}</p>
        <p className="price">{product.price}</p>

     </div>
    )
}

export default Product
