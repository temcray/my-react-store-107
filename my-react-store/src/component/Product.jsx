import QuantityPicker from "./QuantityPicker";
import "./Product.css";
function Product({ data }) {
  function addCart() {
    console.log(add);
  }
  const formatPrice = (price) => {
    return price.toFixed(2);
  };

  return (
    <div className="col-md-4 mb-4 product">
      <div className="card h-100">
        <img
          src={data.image}
          alt={data.name}
          className="card-img-top"
          style={{ objectFit: "cover", height: "200px" }}
        />

        <div className="card-body text-center">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">${formatPrice(data.price)}</p>
          <QuantityPicker />
          <div className="addCart">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={addCart}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
