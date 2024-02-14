import propTypes from "prop-types";
import "./TipTime.css";

function TipTime({ image, message }) {
  return (
    <div className="tip-time">
      <img src={image} className="tip-profile" alt="" />
      <span className="tip-message">{message}</span>
    </div>
  );
}

TipTime.propTypes = {
  image: propTypes.string,
  message: propTypes.string
};

export default TipTime;
