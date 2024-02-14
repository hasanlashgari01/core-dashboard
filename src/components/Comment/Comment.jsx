import propTypes from "prop-types";
import "./Comment.css";

function Comment({ image, name, username, product, comment, time }) {
  return (
    <div className="comment">
      <div className="comment-header">
        <div className="comment-detail">
          <img className="comment-profile" src={image} alt="" />
          <p className="section-text">
            <span className="section-text__bold">{name}</span> @{username}
            <br />
            On <span className="section-text__bold">{product}</span>
          </p>
        </div>
        <span className="section-text">{time}h</span>
      </div>

      <div className="comment-main">
        <p className="comment-main__text">{comment}</p>
      </div>
    </div>
  );
}

Comment.propTypes = {
  image: propTypes.string,
  name: propTypes.string,
  username: propTypes.string,
  product: propTypes.string,
  comment: propTypes.string,
  time: propTypes.number
};

export default Comment;
