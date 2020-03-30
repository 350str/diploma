export class NewsCard {

    createCard = ( { title, description, urlToImage, publishedAt, url, source: { name } } ) => {

        const newsCard = document.createElement('a');
        newsCard.setAttribute('href', `${url}`);
        newsCard.setAttribute('target', '_blank')
        newsCard.classList.add('search-result__item');
        newsCard.insertAdjacentHTML('beforeEnd', `
                <img src="${urlToImage}" alt="search result image" class="search-result__image">
                <div class="search-result__text">
                    <div class="search-result__main-text">
                        <p class="search-result__date">${publishedAt}</p>
                        <h3 class="search-result__title">${title}</h3>
                        <p class="search-result__subtitle">${description}</p>
                    </div>
                    <p class="search-result__source">${name}</p>
                </div>          
        `);   
        const cardContainer = document.querySelector('.search-result__items');
        cardContainer.append(newsCard);
        
    }
}