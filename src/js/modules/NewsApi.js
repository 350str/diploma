import { newsApiUrl } from '../constants/news-api-url';

export class NewsApi {

    getNews(request) {
        return fetch(newsApiUrl(request))
            .then(res => {
                if (res.ok) return res.json()
                            return Promise.reject(`Could not fetch ${newsApiUrl(request)}, received ${res.status}`)            
            })   
    }
}