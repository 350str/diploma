import { NewsCard } from './NewsCard';
import { NewsApi } from '../modules/NewsApi';

export class NewsCardList {

    constructor() {
        this.newsApi = new NewsApi();
        this.newsCard = new NewsCard();
    }

    showMoreHandler = () => {
        const newsArray = JSON.parse(sessionStorage.getItem('news'));
        const currentCardCounter = document.querySelectorAll('.search-result__item').length;
        for (let i = currentCardCounter; i <= currentCardCounter + 2; i++) {
            this.newsCard.createCard(newsArray[i]);
        }
    }

    reqestHandler(request, articles) {
        return articles.filter(article => article.title.toLowerCase().includes(request.toLowerCase())).length
    }

    render = (request) => {
        const loader = document.querySelector('.loader');
        loader.setAttribute('style', 'display: flex');

        this.newsApi.getNews(request)
            .then(({ articles, totalResults }) => {
                const requestInfo = {
                    request, 
                    totalResults, 
                    titlesMatch: this.reqestHandler(request, articles)
                }
                sessionStorage.setItem('request', JSON.stringify(requestInfo))
                sessionStorage.setItem('news', JSON.stringify(articles));
                
                articles.filter((item, index) => index < 3)
                        .forEach(item => this.newsCard.createCard(item));
            })
            .catch(() => {
                loader.setAttribute('style', 'display: none');

                const requestError = document.querySelector('.not-found');
                requestError.querySelector('.not-found__subtitle').textContent = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
                requestError.setAttribute('style', 'display: flex');
            })
            .finally(() => {
                loader.setAttribute('style', 'display: none');

                const searchResultSection = document.querySelector('.search-result');
                const notFoundSection = document.querySelector('.not-found'); 
                ( JSON.parse(sessionStorage.getItem('news')).length ) ? searchResultSection.setAttribute('style', 'display: block')
                                                                      : notFoundSection.setAttribute('style', 'display: flex');
            })
    }
}