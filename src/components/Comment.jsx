import React from "react";
import CommentBox from "./CommentBox";

const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,
}) => {
  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "editing";
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";
  const canDelete = currentUserId === comment.userId && replies.length === 0;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId;
  const replyId = parentId ? parentId : comment.id;

  return (
    <div className="card post mb-3" key={comment.id}>
      <div className="row g-0 ">
        <div className="col-sm-12 post__avatar">
          <img
            //   {avatar}
            src="https://ae01.alicdn.com/kf/HTB1ZkKqaMkLL1JjSZFpq6y7nFXaI/Funny-Cat-Costumes-Pirate-Suit-Cat-Clothes-Kitty-Kitten-Corsair-Halloween-Costume-Puppy-Suits-Dressing-Up.jpg_Q90.jpg_.webp"
            alt="..."
            className="avatar__img mx-2"
          />
          <div className="card-body post__body">
            <div className="card-title post__header">
              <h3>
                <span className="comment-author">{comment.displayname}</span>
                <span className="post__headerSpecial">{comment.username}</span>
              </h3>
            </div>
            <div className="post__headerDescription">
              {!isEditing && <div className="comment-text">{comment.body}</div>}
              {isEditing && (
                <CommentBox
                  submitLabel="UPDATE"
                  hasCancelButton
                  initialText={comment.body}
                  handleSubmit={(text) => updateComment(text, comment.id)}
                  handleCancel={() => {
                    setActiveComment(null);
                  }}
                />
              )}
            </div>
            {/* <img
              //   {image}
              src="https://justsomething.co/wp-content/uploads/2020/05/meet-marley-the-permanently-disappointed-cat-who-looks-like-he-is-judging-your-poor-life-choices-03.jpg"
              alt=""
              className="post__img"
            /> */}
            <div className="post__footer">
              {canReply && (
                <div
                  onClick={() =>
                    setActiveComment({ id: comment.id, type: "replying" })
                  }
                >
                  <i className="bi bi-chat post__option"></i>
                </div>
              )}
              <div>
                <i className="bi bi-heart post__option"></i>
              </div>
              {canEdit && (
                <div
                  onClick={() =>
                    setActiveComment({ id: comment.id, type: "editing" })
                  }
                >
                  <i className="bi bi-pencil-square post__option"></i>
                </div>
              )}
              {canDelete && (
                <div onClick={() => deleteComment(comment.id)}>
                  <i className="bi bi-trash post__option"></i>
                </div>
              )}
            </div>
            {isReplying && (
              <CommentBox
                submitLabel="REPLY"
                handleSubmit={(text) => addComment(text, replyId)}
              />
            )}
            {0 < replies.length < 200 && (
              <div className="replies">
                {replies.map((reply) => (
                  <Comment
                    comment={reply}
                    key={reply.id}
                    setActiveComment={setActiveComment}
                    activeComment={activeComment}
                    updateComment={updateComment}
                    deleteComment={deleteComment}
                    addComment={addComment}
                    parentId={comment.id}
                    replies={[]}
                    currentUserId={currentUserId}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
