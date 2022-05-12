import React from "react";
import { Avatar } from "@mui/material";
import "bootstrap-icons/font/bootstrap-icons.css";

import "../style/post.css";

const Post = ({ displayName, username, text, image, avatar }) => {
  return (
    <div className="card post mb-3">
      <div className="row g-0 ">
        <div className="col-md-2 post__avatar">
          <Avatar
            //   {avatar}
            src="https://img.freepik.com/foto-gratis/gato-gracioso-gafas-sol-gato-gafas-pared-soleada-limpia-azul-claro-mascotas-divertidas-fiesta-vacaciones-viajes-concepto-verano_90380-2622.jpg?w=2000"
          ></Avatar>
        </div>
        <div className="col-md-10">
          <div className="card-body post__body">
            <div className="card-title post__header">
              <h3>
                <span>{displayName} DisplayName</span>
                <span className="post__headerSpecial">
                  @ {username} username
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
            />
            <div className="post__footer">
              <i className="bi bi-chat post__option"></i>
              <i className="bi bi-share post__option"></i>
              <i className="bi bi-heart post__option"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
