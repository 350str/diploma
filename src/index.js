import './index.css';
import { NewsCardList } from './js/components/NewsCardList';
import { SearchInput } from './js/components/SearchInput';
import { NewsCard } from './js/components/NewsCard';

(function() {

const newsCard = new NewsCard();
const searchInput = new SearchInput();
const newCardList = new NewsCardList();

const searchForm = document.querySelector('.search__form');
const searchButton = document.querySelector('.search-result__button');

window.onload = () => {
    const newsStorageData = JSON.parse(sessionStorage.getItem('news'));
    const searchResultSection = document.querySelector('.search-result');
    if (newsStorageData && newsStorageData.length > 0) {
        searchResultSection.setAttribute('style', 'display: block')
        newsStorageData.filter((item, index) => index < 3)
                       .forEach(item => newsCard.createCard(item))
    }
}

searchForm.addEventListener('submit', searchInput.onSubmit);
searchButton.addEventListener('click', newCardList.showMoreHandler);

})()
