import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import NewsManager from "../../modules/NewsManager";

const NewsList = props => {
    const [news, setNews] = useState([]);

    const getNews = () => {
        return NewsManager.getAllNews().then(newsFromDatabase => {
            setNews(newsFromDatabase)
        });
    };

    const deleteNews = (id) => {
        NewsManager.deleteNewsById(id)
            .then(() => NewsManager.getAllNews().then(setNews))
    };

    useEffect(() => {
        getNews();
    }, []);

    return (
        <>
            <section className="newsList__content">
                <button type="button" className="newsList__btn"
                    onClick={() => { props.history.push("/addnews") }}>
                    Add News Article
                </button>

            </section>
        </>
    )
}
