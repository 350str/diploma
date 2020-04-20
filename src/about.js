import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import './about.css';
import { CommitCardList } from './js/components/CommitCardList';
import { GithubApi } from './js/modules/GithubApi';
import { CommitCard } from './js/components/CommitCard';


(function() {

    const githubApi = new GithubApi();
    const commitCard = new CommitCard();

    window.onload = () => {
        const cardsContainer = document.querySelector('.glide__slides');
        const bulletsContainer = document.querySelector('.glide__bullets'); 

        const commitCardList = new CommitCardList(cardsContainer, bulletsContainer, githubApi, commitCard);
        commitCardList.render();
    }
})();
