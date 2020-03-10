const databaseURL = "http://localhost:8088";

export default {
  getUsers() {
    return fetch(`${databaseURL}/users`).then(resp => resp.json());
  },
  post(newUser) {
    return fetch(`${databaseURL}/users`, {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(resp => resp.json())
  }
};
