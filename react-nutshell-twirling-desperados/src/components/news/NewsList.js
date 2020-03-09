import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import NewsManager from "../../modules/NewsManager";

const NewsList = props => {
    const [news, setNews] = useState([]);
    
    const userNow = JSON.parse(sessionStorage.getItem("userCredentials"))



    const getUserNews = () => {
        return NewsManager.getAllNewsByUser().then(newsFromDatabase => {
            const userNewsArticles = newsFromDatabase.filter(article => article.user.id === userNow)
            const sortedNewsArticles = userNewsArticles.sort(function (a, b) {
                return new Date(b.timestamp) - new Date(a.timestamp)
            })
            setNews(sortedNewsArticles)
        });
    };


    const deleteNews = (id) => {
        NewsManager.deleteNewsById(id)
            .then(() => NewsManager.getAllNewsByUser().then(newsFromDatabase => {
                const userNewsArticles = newsFromDatabase.filter(article => article.user.id === userNow)
                const sortedNewsArticles = userNewsArticles.sort(function (a, b) {
                    return new Date(b.timestamp) - new Date(a.timestamp)
                })
                setNews(sortedNewsArticles)
            }));
    }

    useEffect(() => {
        getUserNews();
    }, []);

    return (
        <>
            <section className="newsList__content">
                <button type="button" className="newsList__btn"
                    onClick={() => { props.history.push("/addnews") }}>
                    Add News Article
                </button>
            </section>
            <section className="newsCard__container">
                {news.map(news => <NewsCard key={news.id} news={news} deleteNews={deleteNews} {...props}/>)}
            </section>
        </>
    )
}


export default NewsList
