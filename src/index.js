import './index.css';
import { NewsCardList } from './js/components/NewsCardList';
import { SearchInput } from './js/components/SearchInput';
import { NewsCard } from './js/components/NewsCard';
import { NewsApi } from './js/modules/NewsApi';

(function() {

const searchForm = document.querySelector('.search__form');
const searchButton = document.querySelector('.search-result__button');
const newsContainer = document.querySelector('.search-result__items');

const newsCard = new NewsCard();
const newsApi = new NewsApi();
const newCardList = new NewsCardList(newsContainer, newsCard, newsApi);
const searchInput = new SearchInput(newCardList);


window.onload = () => {
    const input = document.querySelector('.search__input');
    const storageNewsArr = JSON.parse(localStorage.getItem('news'));
    const storageRequestObj = JSON.parse(localStorage.getItem('request'));
    const searchResultSection = document.querySelector('.search-result');

    if (storageNewsArr && storageNewsArr.length > 0) {
        searchResultSection.classList.add('search__result_show');
        storageNewsArr.filter((item, index) => index < 3)
                      .forEach(item => newsContainer.append(newsCard.createCard(item)))
    }
    input.value = storageRequestObj && storageRequestObj.request ? storageRequestObj.request 
                                                                 : ''
}



searchForm.addEventListener('submit', searchInput.onSubmit);
searchButton.addEventListener('click', newCardList.showMoreHandler);

})()
