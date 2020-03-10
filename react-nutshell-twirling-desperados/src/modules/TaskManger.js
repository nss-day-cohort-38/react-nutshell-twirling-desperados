const baseURL = "http://localhost:8088"

export default{
    get(id) {
        return fetch(`${baseURL}/tasks/${id}`).then(result =>result.json())
    },
    getAll(){
        return fetch(`${baseURL}/tasks`).then(result=>result.json())
    },
    delete(id) {
        return fetch(`${baseURL}/tasks/${id}`,{
            method: "DELETE"
        }).then(result => result.json())
    },
    post(newTask) {
        return fetch(`${baseURL}/tasks`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask)
        }).then(data => data.json())
    },
    update(editedTask) {
        return fetch (`${baseURL}/tasks/${editedTask.id}`, {
          method:"PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedTask)
        }).then(data=> data.json());
      }
}
