import React, { useState } from "react";
import NewsManager from "../../modules/NewsManager";
import "./AddNewsForm.css";

const AddNewsForm = props => {
  const userNow = JSON.parse(sessionStorage.getItem("userCredentials"));

  const [newsArticle, setNewsArticle] = useState({
    title: "",
    synopsis: "",
    userId: userNow,
    url: "",
    timestamp: ""
  });
  const [isAvailable, setIsAvailable] = useState(false);

  const handleFieldChange = event => {
    const stateToChange = { ...newsArticle };
    stateToChange[event.target.id] = event.target.value;
    setNewsArticle(stateToChange);
  };

  const buildNewArticle = event => {
    event.preventDefault();
    if (
      newsArticle.title === "" ||
      newsArticle.synopsis === "" ||
      newsArticle.url === ""
    ) {
      window.alert("Please make sure all fields are completed.");
    } else {
      setIsAvailable(true);

      const newsArticleToChange = { ...newsArticle };
      newsArticleToChange.timestamp = new Date();

      NewsManager.post(newsArticleToChange).then(() =>
        props.history.push("./news")
      );
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="newsForm">
            <label htmlFor="title">Article Title: </label>
            <textarea
              required
              onChange={handleFieldChange}
              id="title"
              rows="1"
              cols="50"
              placeholder="Article Title"
            ></textarea>
          </div>
          <div>
            <label htmlFor="synopsis">Article Synopsis: </label>
            <textarea
              required
              onChange={handleFieldChange}
              id="synopsis"
              rows="1"
              cols="50"
              placeholder="Article Synopsis"
            ></textarea>
          </div>
          <div>
            <label htmlFor="url">Article URL: </label>
            <textarea
              required
              onChange={handleFieldChange}
              id="url"
              rows="1"
              cols="50"
              placeholder="Article URL"
            ></textarea>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isAvailable}
              onClick={buildNewArticle}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AddNewsForm;
