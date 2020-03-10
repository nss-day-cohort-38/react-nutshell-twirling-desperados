import React from "react";
import "./NewsCard.css";


const NewsCard = props => {
    return (
        <div className="newsCard">
            <div className="newsCard__content">
                <h3>Title: <span className="newsCard__title">
                    {props.news.title} </span></h3>
                <p> Synopsis: {props.news.synopsis} </p>
                <p> URL: {props.news.url} </p>
                <button type="button"
                   onClick={() => props.history.push(`/${props.news.id}/editnews`)}>
                       Edit News 
                </button>    
                <button type="button" onClick={() => props.deleteNews(props.news.id)}>Delete News</button>
            </div>

        </div>
    );
};

export default NewsCard