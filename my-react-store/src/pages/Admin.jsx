import "./Admin.css";
import { useState } from "react";

function Admin() {
  const [couponsList, setCouponsList] = useState([]);
  const [coupon, setCoupon] = useState({
    code: "",
    discount: "",
  });
  function save() {
    console.log(coupon);
    let copy = [...couponsList];
    copy.push(coupon);
    setCouponsList(copy);
  }

  function handleEvent(e) {
    const value = e.target.value;
    const name = e.target.name;

    /**
     * 3 steps to modify obj or Arrays in State variables
     * -Create a copy
     * -Modify the copy
     * -Set the copy to the original varible
     */

    let copy = { ...coupon };
    if (name == "discount") {
      copy[name] = Number(value);
    } else {
      copy[name] = value;
    }
    setCoupon(copy);
  }
  const [productList, setProductsList] = useState([]);
  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
  });

  function saveProduct() {
    console.log(product);
    let copy = [...productsList];
    copy.push(product);
    setProduct(copy);
  }

  function handleProductEvent(e) {
    const value = e.target.value;
    const name = e.target.name;

    let copy = { ...product };
    if (name == "title") {
      copy[name] = title(value);
    } else {
      copy[name] = price;
    }
    setProduct(copy);
  }

  return (
    <>
      <div className="container admin">
        <div className="parent">
          <section>
            {/*Product Section*/}
            <div className="Product">
              <h3>Product</h3>
            </div>
            <div className="form-field">
              <label className="form-label">Title: </label>
              <input
                className="form-control"
                type="text"
                name="title"
                onBlur={handleProductEvent}
              />
            </div>
            <div className="form-field">
              <label className="form-label">Price: </label>
              <input
                className="form-control"
                type="number"
                name="Price"
                onBlur={handleProductEvent}
              />
            </div>

            <div className="form-field">
              <label className="form-label">Image: </label>
              <input
                className="form-control"
                type="text"
                name="Price"
                onBlur={handleProductEvent}
              />
            </div>
            <button className="btn btn-sm btn-primary" onClick={saveProduct}>
              Save
            </button>
            <div>
              <h4>Your product</h4>
              <ul>
                {productList.map((prod) => (
                  <li key={prod.code}>
                    {prod.title} - ${prod.price}
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section>
            {/*Dicounts Section*/}
            <div className="discounts">
              <h3>Discount code</h3>
              <div className="form-field">
                <label className="form-label">Code: </label>
                <input
                  className="form-control"
                  type="text"
                  name="code"
                  onBlur={handleEvent}
                />
              </div>
              <div className="form-field">
                <label className="form-label">Discount : </label>
                <input
                  className="form-control"
                  type="number"
                  name="discount"
                  onBlur={handleEvent}
                />
              </div>

              <button className="btn btn-sm btn-primary" onClick={save}>
                Save
              </button>
            </div>

            <div>
              <h4>Your save discounts</h4>
              <ul>
                {couponsList.map((cp) => (
                  <li key={cp.code}>
                    {cp.code} - ${cp.discount}{" "}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Admin;
