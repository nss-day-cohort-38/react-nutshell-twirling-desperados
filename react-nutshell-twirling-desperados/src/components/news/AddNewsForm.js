import React, { useState } from "react"
import NewsManager from "../../modules/NewsManager"
import "./AddNewsForm.css"
import LoginManager from "../../modules/LoginManager"
import Login from "../auth/Login"



const AddNewsForm = props => {
    const userNow = JSON.parse(sessionStorage.getItem("userCredentials"))

    const [newsArticle, setNewsArticle] = useState({ title: "", synopsis: "", userId: userNow, url: "", timestamp: "" })
    const [isAvailable, setIsAvailable] = useState(false)



    const handleFieldChange = event => {
        const stateToChange = { ...newsArticle };
        stateToChange[event.target.id] = event.target.value;
        setNewsArticle(stateToChange)
    };


    const buildNewArticle = event => {
        event.preventDefault();
        if (newsArticle.title === "" || newsArticle.synopsis === "" || newsArticle.url === "") {
            window.alert("Please make sure all fields are completed.")
        } else {
            setIsAvailable(true);

            const newsArticleToChange = {...newsArticle};
            newsArticleToChange.timestamp = new Date()
            
            NewsManager.post(newsArticleToChange)
                .then(() => props.history.push("./news"));
        }
    }

    return (
        <>
            <form>
                <fieldset>
                    <div>
                        <input type="text"
                            required
                            onChange={handleFieldChange}
                            id="title"
                            placeholder="Article Title"
                        />
                        <label htmlFor="title">Article Title</label>
                    </div>
                    <div>
                        <input type="text"
                            required
                            onChange={handleFieldChange}
                            id="synopsis"
                            placeholder="Article Synopsis"
                        />
                        <label htmlFor="synopsis">Article Synopsis</label>
                    </div>
                    <div>
                        <input type="url"
                            required
                            onChange={handleFieldChange}
                            id="url"
                            placeholder="Article URL"
                        />
                        <label htmlFor="url">Article URL</label>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isAvailable}
                            onClick={buildNewArticle}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}


export default AddNewsForm