export class NewsCard {

    createCard = ( { title, description, urlToImage, publishedAt, url, source: { name } } ) => {

        const newsCard = document.createElement('a');
        newsCard.setAttribute('href', `${url}`);
        newsCard.setAttribute('target', '_blank')
        newsCard.classList.add('search-result__item');
        newsCard.insertAdjacentHTML('beforeEnd', `
                <img src="" alt="search result image" class="search-result__image">
                <div class="search-result__text">
                    <div class="search-result__main-text">
                        <p class="search-result__date"></p>
                        <h3 class="search-result__title"></h3>
                        <p class="search-result__subtitle"></p>
                    </div>
                    <p class="search-result__source"></p>
                </div>          
        `);
        
        newsCard.querySelector('.search-result__image').setAttribute('src', urlToImage);
        newsCard.querySelector('.search-result__date').textContent = publishedAt;
        newsCard.querySelector('.search-result__title').textContent = title;
        newsCard.querySelector('.search-result__subtitle').textContent = description;
        newsCard.querySelector('.search-result__source').textContent = name;

        return newsCard;
        
    }
}