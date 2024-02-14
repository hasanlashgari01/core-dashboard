import propTypes from "prop-types";
import TipTime from "../TipTime/TipTime";
import "./Tip.css";

function Tip({ icon, title, children, image, message }) {
  return (
    <div className="tip">
      <div className="tip-icon">
        <img src={icon} alt="" />
      </div>
      <div className="tip-content">
        <h3 className="tip-content__title">{title}</h3>
        <div className="tip-details">
          {children}
          <TipTime image={image} message={message} />
        </div>
      </div>
    </div>
  );
}

Tip.propTypes = {
    icon: propTypes.string,
    title: propTypes.string,
    children: propTypes.object,
    image: propTypes.string,
    message: propTypes.string,
}

export default Tip;
