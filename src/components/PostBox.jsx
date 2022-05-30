import React, { useState } from "react";
import "../style/postbox.css";
import Swal from "sweetalert2";
import { postPublicacion } from "../helpers/publicaciones";


const PostBox = ({setActualizar}) => {
  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    texto: "",
       
  });
  const limpiarCampos = () => {
    setFormValue({
      texto: "",
      imagen: ""
      
    });
  };
  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
    
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    const { texto} = formValue;
    
    if (texto) {
      postPublicacion(formValue).then((respuesta) => {

        if (respuesta.errors) {
          setLoading(false);
          return Swal.fire({
            icon: "error",
            title: "Error",
            text: respuesta.errors[0].msg,
          });

        } else {
          setLoading(false);
          Swal.fire({
            icon: "success",
            title: "OK",
            text: `Se creo el Post`,
          });
          limpiarCampos()
          setActualizar(true)
        }
           
      });
    }
  };
  return (
    <div className="card mb-3 postBox">
      <div className="row g-0 ">
        <form onSubmit={handleSubmit}>
          <div className="postBox__input">
            <img
              src="https://ae01.alicdn.com/kf/HTB1ZkKqaMkLL1JjSZFpq6y7nFXaI/Funny-Cat-Costumes-Pirate-Suit-Cat-Clothes-Kitty-Kitten-Corsair-Halloween-Costume-Puppy-Suits-Dressing-Up.jpg_Q90.jpg_.webp"
              alt=""
              className="avatar__img"
            />
            <input
              name="texto"
              onChange={handleChange}
              value={formValue.texto}
              placeholder="Meow to the world"
              type="text"
              maxLength={200}
            />
          </div>
          <input
            name="imagen"
            onChange={handleChange}
            value={formValue.imagen}
            className="postBox__inputImg"
            placeholder="Optional: Enter image URL"
            type="text"
          />
          <div className="text-end">
            <button
              type="submit"
              className=" btn postBox__postButton"
              disabled={loading}
            >
              meow
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostBox;
