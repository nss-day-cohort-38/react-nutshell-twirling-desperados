import React from "react"
import NewsManager from "../../modules/NewsManager"

const EditNewsForm = props => {
    const userNow = JSON.parse(sessionStorage.getItem("userCredentials"))

    const [newsArticle, setNewsArticle] = useState({ title: "", synopsis: "", userId: userNow, url: "", timestamp: "" })
    const [isAvailable, setIsAvailable] = useState(false)

    const handleFieldChange = evt => {
        const stateToChange = { ...newsArticle };
        stateToChange[evt.target.id] = evt.target.value;
        setLocation(stateToChange);
      };

      const updateCurrentArticle = event => {
          event.preventDefault()
          setIsAvailable(true);

          const editedNewsArticle = {
            id: props.match.params.newsId,
            userId: userNow,
            url: newsArticle.url,
            title:,
            "synopsis": "Amtrak would love to add a passenger line running between Nashville and Atlanta and wants to test interest.",
            "timestamp": "2020-02-25T18:50:48.504Z"
          }
      }
}