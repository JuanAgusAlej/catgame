import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

import "../style/post.css";

const Post = ({
  displayName,
  username,
  text,
  image,
  avatar,
  like,
  comentario,
}) => {
  return (
    <div className="card post mb-3">
      <div className="row g-0 ">
        <div className="col-sm-12 post__avatar">
          <img
            src={avatar}
            //src="https://i.pinimg.com/564x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg"
            className="avatar__img mx-2"
          />
          <div className="card-body post__body">
            <div className="card-title post__header">
              <h3>
                <span>{displayName} </span>
                <span className="post__headerSpecial">- @{username}</span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p className="card-text">{text}</p>
            </div>
            <img
              //
              src={image}
              alt=""
              className="post__img"
            />
            <div className="post__footer">
              {/* </Link> */}
              <i className="bi bi-heart post__option">
                {" "}
                <span className="post__headerSpecial ">
                  {" "}
                  {like.length}{" "}
                </span>{" "}
              </i>
              {/* <Link to="/Comments" >  tiene que llevar al componente Comments donde el post renderizado sea donde se hizo el click*/}
              <Link to="/comments">
                <i className="bi bi-chat post__option">
                  <span className="post__headerSpecial ">
                    {" "}
                    {comentario.length}{" "}
                  </span>
                </i>
              </Link>
              <Link to="/*">
                <i className="bi bi-share post__option"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
