import React, { useState, useEffect } from "react";
import NewsManager from "../../modules/NewsManager";

const EditNewsForm = props => {
  const userNow = JSON.parse(sessionStorage.getItem("userCredentials"));

  const [newsArticle, setNewsArticle] = useState({
    title: "",
    synopsis: "",
    userId: "",
    url: "",
    timestamp: ""
  });
  const [isAvailable, setIsAvailable] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...newsArticle };
    stateToChange[evt.target.id] = evt.target.value;
    setNewsArticle(stateToChange);
  };

  const updateCurrentArticle = event => {
    event.preventDefault();
    setIsAvailable(true);

    const editedNewsArticle = {
      id: props.match.params.newsId,
      userId: userNow,
      url: newsArticle.url,
      title: newsArticle.title,
      synopsis: newsArticle.synopsis,
      timestamp: newsArticle.timestamp
    };

    NewsManager.update(editedNewsArticle).then(() =>
      props.history.push("/news")
    );
  };

  useEffect(() => {
    NewsManager.getNewsById(props.match.params.newsId).then(newsArticle => {
      const newsArticleToChange = { ...newsArticle };
      newsArticleToChange.timestamp = new Date();

      setNewsArticle(newsArticleToChange);
      setIsAvailable(false);
    });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="newsForm">
            <label htmlFor="title">Article Title: </label>
            <textarea
              required
              className="newsForm-control"
              onChange={handleFieldChange}
              id="title"
              rows="1"
              cols="50"
              value={newsArticle.title}
            ></textarea>
          </div>
          <div>
            <label htmlFor="synopsis">Article Synopsis: </label>
            <textarea
              required
              className="newsForm-control"
              onChange={handleFieldChange}
              id="synopsis"
              rows="1"
              cols="50"
              value={newsArticle.synopsis}
            ></textarea>
          </div>
          <div>
            <label htmlFor="url">Article URL: </label>
            <textarea
              type="url"
              required
              className="newsForm-control"
              onChange={handleFieldChange}
              id="url"
              rows="1"
              cols="50"
              value={newsArticle.url}
            />
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isAvailable}
              onClick={updateCurrentArticle}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EditNewsForm;
