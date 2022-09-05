import axios from 'axios';

class Api {
  static getNotes(id) {
    return axios.get(
      `${process.env.REACT_APP_API_URL}${id}/notes/`,
      { headers: { Authorization: 'Token tb4RDHco6FzwIXR7Rsw1cwxgejqp8d7yNdVKqdf6NUMxxPA5qdPFD3g4749Tjn0U' } },
    );
  }

  static createUsers(id, body) {
    return axios.post(
      `${process.env.REACT_APP_API_URL}${id}/notes/`,
      body,
      { headers: { Authorization: 'Token tb4RDHco6FzwIXR7Rsw1cwxgejqp8d7yNdVKqdf6NUMxxPA5qdPFD3g4749Tjn0U' } },
    );
  }

  static deleteNote(noteId, userId) {
    return axios.delete(
      `${process.env.REACT_APP_API_URL}${userId}/notes/${noteId}`,
      { headers: { Authorization: 'Token tb4RDHco6FzwIXR7Rsw1cwxgejqp8d7yNdVKqdf6NUMxxPA5qdPFD3g4749Tjn0U' } },
    );
  }

  static updateNote(noteId, userId, body) {
    return axios.patch(
      `${process.env.REACT_APP_API_URL}${userId}/notes/${noteId}/`,
      body,
      { headers: { Authorization: 'Token tb4RDHco6FzwIXR7Rsw1cwxgejqp8d7yNdVKqdf6NUMxxPA5qdPFD3g4749Tjn0U' } },
    );
  }
}

export default Api;
