import QuantityPicker from "./QuantityPicker";
function Product({ data }) {
    const formatPrice = (price) => {
        return price.toFixed(2);
    };

    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100" >
                <img src={data.image}
                    alt={data.name}
                    className="card-img-top"
                    style={{ objectFit: "cover", height: "200px" }} />

                <div className="card-body text-center">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">${formatPrice(data.price)}</p>
                    <QuantityPicker />
                </div>
            </div>

        </div>
    );
}

export default Product;