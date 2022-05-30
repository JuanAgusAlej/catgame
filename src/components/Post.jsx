import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

import "../style/post.css";

const Post = ({ displayName, username, text, image, avatar }) => {
  return (
    <div className="card post mb-3">
      <div className="row g-0 ">
        <div className="col-sm-12 post__avatar">
          <img
            //   {avatar}
            src="https://i.pinimg.com/564x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg"
            className="avatar__img mx-2"
          />
          <div className="card-body post__body">
            <div className="card-title post__header">
              <h3>
                <span>{displayName} DisplayName</span>
                <span className="post__headerSpecial">
                  {username} @username
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p className="card-text">
                {text}This is a wider card with supporting text below as a
                natural lead-in to additional content. This content is a little
                bit longer.
              </p>
            </div>
            <img
              //   {image}
              src="https://media1.giphy.com/media/ICOgUNjpvO0PC/giphy.gif?cid=ecf05e47um1sc1svv5iwa80qlk9nhgfe7viyt2qbrwc8xhme&rid=giphy.gif&ct=g"
              alt=""
              className="post__img"
            />
            <div className="post__footer">
              <Link to="/comments">
                <i className="bi bi-chat post__option"></i>
              </Link>
              <Link to="/*">
                <i className="bi bi-share post__option"></i>
              </Link>
              <i className="bi bi-heart post__option"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
