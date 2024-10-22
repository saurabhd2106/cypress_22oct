import { restclient } from "../cypress/support/restclient"

export class ArticlePageApi {

    addArticle(token, articleDetails) {
        const article_header = {
            "Content-Type": "application/json",

            "Authorization": "Token " + token
        }

       return restclient.sendPostRequest("/api/articles", articleDetails, article_header)



    }

    verifyAddArticleSuccess(response, title) {

        expect(response.body.article.title).to.contains(title)

    }
}

export const articleApi = new ArticlePageApi()