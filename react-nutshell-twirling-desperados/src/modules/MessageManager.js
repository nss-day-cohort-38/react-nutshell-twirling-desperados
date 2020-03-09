const remoteURL = "http://localhost:8088";

export default {
    getAllMessagesWithUsers() {
        return fetch(`${remoteURL}/messages?_expand=user`).then(result => result.json())
    },
    get(id) {
      return fetch(`${remoteURL}/messages/${id}`).then(resp => resp.json())
    },
    post(newMessage) {
        return fetch(`${remoteURL}/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        }).then(data => data.json())
    },
    update(editedMessage) {
        return fetch(`${remoteURL}/messages/${editedMessage.id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(editedMessage)
        }).then(resp => resp.json())
    }
}