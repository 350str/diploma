export class NewsCardList {

    constructor(newsContainer, newsCard, newsApi) {
        this.newsContainer = newsContainer;
        this.newsApi = newsApi;
        this.newsCard = newsCard;

    }

    showMoreHandler = () => {
        const newsArray = JSON.parse(localStorage.getItem('news'));
        const currentCardCounter = document.querySelectorAll('.search-result__item').length;
        const showMoreButton = document.querySelector('.search-result__button')

        for (let i = currentCardCounter; i <= currentCardCounter + 2; i++) {
           newsArray[i] && this.newsContainer.append(this.newsCard.createCard(newsArray[i]))
           if (!newsArray[i] || newsArray.length === i + 1) showMoreButton.setAttribute('style', 'display: none')              
        }
      
    }

    _reqestHandler(request, articles) {
        return articles.filter(article => article.title.toLowerCase().includes(request.toLowerCase())).length
    }

    render = (request) => {
        const loader = document.querySelector('.loader');
        const searchButton = document.querySelector('.search__button');
        const showMoreButton = document.querySelector('.search-result__button');
        const searchInput = document.querySelector('.search__input');
        const searchResultSection = document.querySelector('.search-result');
        const notFoundSection = document.querySelector('.not-found');

        searchButton.setAttribute('disabled', true);
        searchInput.setAttribute('disabled', true);
        loader.classList.add('loader_show')
        
        this.newsApi.getNews(request)
            .then(({ articles, totalResults }) => {
                const requestInfo = {
                        request, 
                        totalResults, 
                        titlesMatch: this._reqestHandler(request, articles)
                    }
                localStorage.setItem('request', JSON.stringify(requestInfo))
                localStorage.setItem('news', JSON.stringify(articles));
                if (articles.length <= 3) showMoreButton.setAttribute('style', 'display: none') 
                articles.filter((article, articleIndex) => articleIndex < 3)
                        .forEach(article => this.newsContainer.append(this.newsCard.createCard(article)));
            })
            .catch((error) => {
                loader.classList.remove('loader_show');
                localStorage.setItem('news', JSON.stringify([]));
                notFoundSection.querySelector('.not-found__subtitle').textContent = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
                notFoundSection.setAttribute('style', 'display: flex');

                console.error(error)
            })
            .finally(() => {
                loader.classList.remove('loader_show');
                searchButton.removeAttribute('disabled');
                searchInput.removeAttribute('disabled');

                const storageNewsLength = JSON.parse(localStorage.getItem('news')).length
                storageNewsLength ? searchResultSection.setAttribute('style', 'display: block')
                                  : notFoundSection.setAttribute('style', 'display: flex');
            })
    }
}