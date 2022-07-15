import { useState } from "react"
import useIdsContext from "./useIdsContext"

function useContextData () {

    const [ users, setUsers ] = useState([])
    const [ articles, setArticles ] = useState([])
    const [ sales, setSales ] = useState([])
    const idsContext = useIdsContext()

    return {
        states: {
            users,
            articles,
            sales,
        },
        actions: {
            addUser: function (user) {
                const newUser = {
                    id: idsContext.newId("users"),
                    name: user
                }
                setUsers([...users, newUser])
            },
            addArticle: function (article) {
                const newArticle = {
                    id: this.newId("articles"),
                    name: article
                }
                setArticles([...articles, newArticle])
            },
            addSale: function (userId, articleId) {
                const newSale = {
                    id: this.newId("sales"),
                    userId: userId,
                    articleId: articleId
                }
                setSales([...sales, newSale])
            },
        }
    }
}

export default useContextData