import propTypes from "prop-types";
import "./SectionBox.css";

function SectionBox({ title, children }) {
  return (
    <div className="section-box">
      <div className="section-box__header">
        <h2 className="section-box__header-title">{title}</h2>
      </div>
      <div className="section-box__children-wrapper">{children}</div>
    </div>
  );
}

SectionBox.propTypes = {
  children: propTypes.any,
  title: propTypes.string
};

export default SectionBox;
