import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import './about.css';
import { CommitCardList } from './js/components/CommitCardList';

(function() {
    window.onload = () => {
        const commitCardList = new CommitCardList();
        commitCardList.render();
    }
})();
