import { NewsCardList } from './NewsCardList';

export class SearchInput {
    constructor() {    
        this.newsCardList = new NewsCardList();
    }

    onSubmit = (event) => {
        event.preventDefault();

        const searchItems = document.querySelectorAll('.search-result__item');
        const searchSection = document.querySelector('.search-result');
        const input = document.querySelector('.search__input');
        const notFoundSection = document.querySelector('.not-found');

        searchItems.forEach(item => item.remove())
        this.newsCardList.render(input.value);
        searchSection.setAttribute('style', 'display: none');
        notFoundSection.setAttribute('style', 'display: none');
        
        input.value='';
    }
}