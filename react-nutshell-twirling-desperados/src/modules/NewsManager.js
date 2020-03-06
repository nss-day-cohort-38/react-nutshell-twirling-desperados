const remoteURL = "http://localhost:8088”

export default {
    getNewsById(id) {
        return fetch(`${remoteURL}/news/${id}`).then(resp => resp.json())
    },
    getAllNews() {
        return fetch(`${remoteURL}/news`).then(resp => resp.json())
    },
    deleteNewsById(id) {
        return fetch(`${remoteURL}/news/${id}`, {
            method: "DELETE"
        }).then(resp => resp.json())
    }
}   
