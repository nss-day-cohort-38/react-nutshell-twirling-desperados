const remoteURL = "http://localhost:8088";

export default {
    getAllMessagesWithUsers() {
        return fetch(`${remoteURL}/messages?_expand=user`).then(result => result.json())
    },
    post(newMessage) {
        return fetch(`${remoteURL}/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        }).then(data => data.json())
    }
}