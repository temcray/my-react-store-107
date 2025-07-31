function ProductCard({ title, price, image, description }) {
return (
<div className="product-card">
<div className="product-image">
<img src={image} alt={title} />
</div>
<div className="product-info">
<h3 className="product-title">{title}</h3>
<p className="product-description">{description}</p>
<div className="product-price">${price}</div>
<button className="btn btn-primary">Add to Cart</button>
</div>
</div>
);
}
export default ProductCard;
