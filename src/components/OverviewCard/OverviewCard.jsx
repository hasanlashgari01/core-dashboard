import propTypes from "prop-types";
import { productData } from "../../data/data";
import TinyLineChart from "../Chart/TinyLineChart";
import "./OverviewCard.css";

function OverviewCard({ stroke, bgColor, icon, title, count, percent, status }) {
  return (
    <div className="overview-card" style={{ backgroundColor: bgColor }}>
      <div className="overview-card__icon">
        <img src={icon} alt="" />
      </div>
      <div className="overview-card__wrapper">
        <div className="overview-card__content">
          <h6 className="overview-card__title">{title}</h6>
          <h1 className="overview-card__count">{count}</h1>
          <h6 className={status ? "overview-card__percent-up" : "overview-card__percent-down"}>
            {percent}% <span className="overview-card__percent-text">this week</span>
          </h6>
        </div>
        <div className="overview-card__chart">
          <TinyLineChart data={productData} stroke={stroke} />
        </div>
      </div>
    </div>
  );
}

OverviewCard.propTypes = {
  stroke: propTypes.string,
  bgColor: propTypes.string,
  icon: propTypes.string,
  title: propTypes.string,
  count: propTypes.string,
  percent: propTypes.number,
  status: propTypes.bool
};

export default OverviewCard;
