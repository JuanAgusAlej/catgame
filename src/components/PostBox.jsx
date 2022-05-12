import React, { useState } from "react";
import "../style/postbox.css";

import { Avatar, Button } from "@mui/material";

const PostBox = () => {
  const [postMessage, setPostMessage] = useState("");

  const [postImage, setPostImage] = useState("");

  const sendPost = (e) => {
    e.preventDefault();

    // nombrebasededatos.collection("posts").add({
    //   displayName: "Pablito",
    //   username: "clavounclavito",
    //   text: postMessage,
    //   image: postImage,
    //  avatar:
    // })

    setPostImage("");
    setPostImage("");
  };

  return (
    <div className="card mb-3 postBox">
      <div className="row g-0 ">
        <form>
          <div className="postBox__input">
            <Avatar src="https://ae01.alicdn.com/kf/HTB1ZkKqaMkLL1JjSZFpq6y7nFXaI/Funny-Cat-Costumes-Pirate-Suit-Cat-Clothes-Kitty-Kitten-Corsair-Halloween-Costume-Puppy-Suits-Dressing-Up.jpg_Q90.jpg_.webp"></Avatar>
            <input
              onChange={(e) => setPostMessage(e.target.value)}
              value={postMessage}
              placeholder="Meow to the world"
              type="text"
            />
          </div>
          <input
            onChange={(e) => setPostImage(e.target.value)}
            value={postImage}
            className="postBox__inputImg"
            placeholder="Optional: Enter image URL"
            type="text"
          />
          <div className="text-end">
            <button
              onClick={sendPost}
              type="submit"
              className=" btn postBox__postButton text-uppercase"
            >
              Meow
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostBox;