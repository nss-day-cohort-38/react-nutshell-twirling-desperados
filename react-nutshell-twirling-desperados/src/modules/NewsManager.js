const remoteURL = "http://localhost:8088"

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
    },
    getAllNewsByUser() {
        return fetch(`${remoteURL}/news/?_expand=user`)
        .then(resp => resp.json())
    },
    post(newArticle) {
        return fetch(`${remoteURL}/news`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newArticle)
        }).then(resp => resp.json)
    },
    update(editedNewsArticle) {
        return fetch(`${remoteURL}/news/${editedNewsArticle.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedNewsArticle)
        }).then(resp => resp.json());
    }
}   
