// para importar en app es <Comments currentUserId="1" /> para que reconozca el usuario activo

import React, { useState, useEffect } from "react";
import CommentBox from "./CommentBox";
import Comment from "./Comment";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "../helpers/commentData";

import "../style/comments.css";
import Post from "./Post";

const Comments = ({ commentsUrl, currentUserId }) => {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  const addComment = (text, parentId) => {
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
    });
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };
  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove this comment?")) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  return (
    <div className="comments">
      <Post />
      <div>
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
          />
        ))}
        <div>
          <CommentBox submitLabel="MEOW" handleSubmit={addComment} />
        </div>
      </div>
    </div>
  );
};

export default Comments;

// import React, { useEffect, useState } from "react";
// import {
//   getComments as getCommentsApi,
//   createComment as createCommentApi,
// } from "../helpers/commentData";
// import Comment from "./Comment";

// import "../style/comments.css";
// import CommentBox from "./CommentBox";

// const Comments = ({ currentUserId }) => {
//   const [backendComments, setBackendComments] = useState([]);

//   const rootComments = backendComments.filter(
//     (backendComment) => backendComment.parentId === null
//   );
//   const getReplies = (commentId) => {
//     return backendComments.filter(
//       (backendComments) => backendComments.parentId === commentId
//     );
//   };

//   const addComment = (text, parentId) => {
//     console.log("addComment", text, parentId);
//     createCommentApi(text, parentId).then((comment) => {
//       setBackendComments([comment, ...backendComments]);
//     });
//   };

//   //   console.log("backendComments", backendComments);
//   useEffect(() => {
//     getCommentsApi().then((data) => {
//       setBackendComments(data);
//     });
//   }, []);

//   return (
//     <div className="comments">
//       <h3 className="comments-tittle">Comments</h3>
//       <div className="comments-container">
//         {rootComments.map((rootComment) => (
//           <Comment
//             key={rootComment.id}
//             comment={rootComment}
//             replies={getReplies(rootComment.id)}
//           />
//         ))}
//         <div className="comment-box-tittle">Write comment</div>
//         <CommentBox submitLabel="MEOW" handleSubmit={addComment} />
//       </div>
//     </div>
//   );
// };

// export default Comments;
