import propTypes from "prop-types";
import "./Customer.css";

function Customer({ image, name }) {
  return (
    <div className="customer">
      <img src={image} className="customer-profile" alt="" />
      <h4 className="customer-name">{name}</h4>
    </div>
  );
}

Customer.propTypes = {
  image: propTypes.string,
  name: propTypes.string
};

export default Customer;
