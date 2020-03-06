const baseURL = "https://localhost:3000"

export default{
    get(id) {
        return fetch(`${baseURL}/tasks/${id}`).then(result =>result.json())
    },
    getAll(){
        return fetch(`${baseURL}/tasks`).then(result=>result.json())
    },
    // delete(id) {
    //     return fetch(`${baseURL}/tasks${id}`,{
    //         method: "DELETE"
    //     }).then(result => result.json())
    // },

}
