const remoteURL = "http://localhost:8088";

export default {
    getAllMessagesWithUsers() {
        return fetch(`${remoteURL}/messages?_expand=user`).then(result => result.json())
    }
}