//PARA CONSULTA: por más que coloque un max lenght en el comentario, se renderiza en una sola linea y se sale del contenedor

import React, { useState } from "react";

const CommentBox = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(text);

    setText("");
  };
  return (
    <div className="card mb-3 postBox">
      <div className="row g-0 ">
        <form onSubmit={onSubmit}>
          <div className="postBox__input">
            <img
              src="https://ae01.alicdn.com/kf/HTB1ZkKqaMkLL1JjSZFpq6y7nFXaI/Funny-Cat-Costumes-Pirate-Suit-Cat-Clothes-Kitty-Kitten-Corsair-Halloween-Costume-Puppy-Suits-Dressing-Up.jpg_Q90.jpg_.webp"
              alt=""
              className="avatar__img"
            />
            <input
              placeholder="Meow to this"
              className="comment-form-textarea"
              value={text}
              maxLength={80}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <input
            className="postBox__inputImg"
            placeholder="Optional: Enter image URL"
            type="text"
          />
          <div className="text-end">
            <button
              className="btn comment-form-button"
              disabled={isTextareaDisabled}
            >
              {submitLabel}
            </button>

            {hasCancelButton && (
              <button
                type="button"
                className="btn text-uppercase"
                onClick={handleCancel}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentBox;
