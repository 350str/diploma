import './analytics.css';
import { Statistics } from './js/components/Statistics';

(function() {
    const analysisItemContainer = document.querySelector('.analysis__items');
    const statistic = new Statistics(analysisItemContainer);

    window.onload = () => { 
        statistic.render();
    }
})();
