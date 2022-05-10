import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import PostBox from "../components/PostBox";
import ProfileCard from "../components/ProfileCard";
import "../style/feed.css";

const Feed = () => {
  // const [post, setPost] = useState([]);

  // useEffect(() => {
  // nombrebasededatos.collection ("posts").onSnapshot(snapshot=>(
  //   setPosts(snapshot.docs.map (doc=> doc.data()))
  // )
  //   ))
  // }, []);

  return (
    <div className="container d-flex feed">
      <div className="row">
        <div className="col-8">
          <PostBox />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />

          {/* {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))} */}
        </div>
        <div className="col-4">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default Feed;
