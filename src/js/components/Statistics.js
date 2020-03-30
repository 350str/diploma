import { Tools } from '../utils/Tools';

export class Statistics {

    constructor() {
        this.tools = new Tools();
    }

    requestHandler() {
        const requestData = JSON.parse(sessionStorage.getItem('request'));
        const { request, totalResults, titlesMatch } = requestData;
        document.querySelector('.request__title').textContent = `Вы спросили: ${request}`;
        document.querySelector('.request__subtitle_total').textContent = `${totalResults}`;
        document.querySelector('.request__subtitle_match').textContent = `${titlesMatch}`;
    }

    render() {
        const newsArr = JSON.parse(sessionStorage.getItem('news'));
        if (newsArr && newsArr.length) {
            this.requestHandler();
            const dateCounter = this.tools.dateHandler(newsArr);
            for (let key in dateCounter) {
                const analysisItem = document.createElement('div');
                analysisItem.classList.add('analysis__item');
                analysisItem.insertAdjacentHTML('beforeEnd', `
                    <p class="analysis__date">
                        <span class="analysis__date_day_month">${key}</span> 
                    </p>
                    <div class="analysis__graph">${dateCounter[key]}</div>         
                `);
                analysisItem.querySelector('.analysis__graph').setAttribute('style', `width: calc((100% - 104px)*${dateCounter[key]}/100)`)
                
                document.querySelector('.analysis__items').append(analysisItem);   
            }
        }
    }
}