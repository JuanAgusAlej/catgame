export const getComments = async () => {
    return [
      {
        id: "1",
        body: "First comment",
        displayname: "Pablito",
        username: "@pablitoclavo1clavito",
        userId: "1",
        parentId: null,
      },
      {
        id: "2",
        body: "Second comment",
        displayname: "NombreDeUsuario",
        username: "@nombredeusuario",
        userId: "2",
        parentId: null,
      },
      {
        id: "3",
        body: "First comment first child",
        displayname: "NombreDeUsuario",
        username: "@nombredeusuario",
        userId: "2",
        parentId: "1",
      },
      {
        id: "4",
        body: "Second comment child",
        displayname: "NombreDeUsuario",
        username: "@nombredeusuario",
        userId: "2",
        parentId: "2",
      },
    ];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36),
      body: text,
      parentId,
      userId: "1",
      displayname: "Pablito",
      username:"@clavo1clavito"
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };