import './analytics.css';
import { Statistics } from './js/components/Statistics';

(function() {
    window.onload = () => {
        const statistic = new Statistics();
        statistic.render();
    }
})();
