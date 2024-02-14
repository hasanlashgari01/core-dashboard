import propTypes from "prop-types";
import "./PopularProduct.css";

function PopularProduct({ title, price, image, status }) {
  return (
    <div className="popular-product">
      <div className="popular-product-left">
        <img src={image} className="popular-product__image" alt="" />
        <span className="popular-product__title">{title}</span>
      </div>
      <div className="popular-product-right">
        <span className="popular-product__price">${price}</span>
        <span className={status ? "popular-product__status--active" : "popular-product__status--deactive"}>
          {status ? "Active" : "Deactive"}
        </span>
      </div>
    </div>
  );
}

PopularProduct.propTypes = {
  title: propTypes.string,
  price: propTypes.string,
  image: propTypes.string,
  status: propTypes.bool
};

export default PopularProduct;
