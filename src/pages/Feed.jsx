import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import PostBox from "../components/PostBox";
import ProfileCard from "../components/ProfileCard";
import { getPublicacion } from "../helpers/publicaciones";
import "../style/feed.css";

const Feed = () => {
  // const [post, setPost] = useState([]);

  // useEffect(() => {
  // nombrebasededatos.collection ("posts").onSnapshot(snapshot=>(
  //   setPosts(snapshot.docs.map (doc=> doc.data()))
  // )
  //   ))
  // }, []);
  const [actualizar, setActualizar] = useState(false);
  const [posts, setPosts] = useState({
		loading: true,
		datos: [],
  });
  useEffect(() => {
    updateDatos()
		
  }, [actualizar]);
  const updateDatos = () => {
    getPublicacion().then((respuesta) => {
			setPosts({
				loading: false,
				datos: respuesta.reverse(),
			});
    });
    setActualizar(false);
 

  };
  console.log(posts);

  return (
    <>
      <Navbar />
      <div className="container  feed">
        <div className="row">
          <div className="col col-md-8 col-sm-12">
            <PostBox
              setActualizar={setActualizar}
            />
            {/* <Post />
            <Post />
            <Post />
            <Post />
            <Post /> */}
            {/* <Comments currentUserId="1" /> */}
            {posts.datos.map((post) => (
          <Post
            key={post._id}
            displayName={post.usuario.nombre}
            username={post.usuario.nombre}
            text={post.texto}
            avatar={post.usuario.avatar}
                image={post.imagen}
                like={post.like}
                comentario={post.comentarios}
          />
        ))}
          </div>
          <div className="col col-md-4 d-none d-sm-none d-md-block">
            <ProfileCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
