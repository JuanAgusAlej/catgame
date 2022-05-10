import React from "react";
import { Button } from "@mui/material";

import "../style/profilecard.css";
const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="card card-user">
        <img
          src="https://ae01.alicdn.com/kf/HTB1ZkKqaMkLL1JjSZFpq6y7nFXaI/Funny-Cat-Costumes-Pirate-Suit-Cat-Clothes-Kitty-Kitten-Corsair-Halloween-Costume-Puppy-Suits-Dressing-Up.jpg_Q90.jpg_.webp"
          className=" profile-img"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-center">DisplayName</h5>
          <p className="text-muted text-center">@username</p>
          <div className="text-center">
            <Button className="postBox__postButton">Profile</Button>
          </div>
          <div className="text-center">
            <Button className="postBox__postButton">Meow</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
