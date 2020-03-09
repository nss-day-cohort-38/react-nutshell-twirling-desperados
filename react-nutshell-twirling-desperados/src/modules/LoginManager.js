const databaseURL = "http://localhost:8088";

export default {
  getUsers() {
    return fetch(`${databaseURL}/users`).then(resp => resp.json());
  }
};
