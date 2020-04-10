export class SearchInput {
    constructor(newsCardList) { 
        this.newsCardList = newsCardList;
    }

    onSubmit = (event) => {
        event.preventDefault();
        const input = document.querySelector('.search__input');
        const searchItems = document.querySelectorAll('.search-result__item');
        const searchSection = document.querySelector('.search-result');
        const notFoundSection = document.querySelector('.not-found');
        const showMoreButton = document.querySelector('.search-result__button')

        searchItems.forEach(searchItem => searchItem.remove())
        this.newsCardList.render(input.value);

        searchSection.setAttribute('style', 'display: none');
        notFoundSection.setAttribute('style', 'display: none');
        showMoreButton.setAttribute('style', 'display: block')
    
    }
}