import propTypes from "prop-types";
import "./CustomerSocial.css";

function CustomerSocial({ icon, name }) {
  return (
    <div className="customer-social">
      <img src={icon} className="customer-social__icon" alt="" />
      <span className="customer-social__name">{name}</span>
    </div>
  );
}

CustomerSocial.propTypes = {
  icon: propTypes.string,
  name: propTypes.string
};

export default CustomerSocial;
