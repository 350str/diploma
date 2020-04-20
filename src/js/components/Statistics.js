export class Statistics {
    constructor(itemsContainer) {
        this.itemsContainer = itemsContainer
    }

    _dayHandler(day) {
        switch(day) {
            case 1:
                return 'пн'
            case 2:
                return 'вт'
            case 3:
                return 'ср'
            case 4:
                return 'чт'
            case 5:
                return 'пт'
            case 6: 
                return 'сб'
            case 7:
                return 'вс'
            
        }
    }

    _dateHandler(dateArray) {
        const dayArray = dateArray.map(article => article.publishedAt.slice(8, 10) 
                                 + ', '
                                 + this._dayHandler(new Date(article.publishedAt.slice(0, 10)).getDay() + 1))
                                 .sort();
        let counter = 1;
        const dayCounter = {};
        for (let i = 0; i < dayArray.length; i++) {     
            if (dayArray[i] === dayArray[i + 1]) {
                counter++;
            } else {
                dayCounter[dayArray[i]] = counter;
                counter = 1;
            }    
        }
        return dayCounter;
    }

    _requestHandler() {
        const requestData = JSON.parse(localStorage.getItem('request'));
        const { request, totalResults, titlesMatch } = requestData;
        document.querySelector('.request__title').textContent = `Вы спросили: ${request}`;
        document.querySelector('.request__subtitle_total').textContent = `${totalResults}`;
        document.querySelector('.request__subtitle_match').textContent = `${titlesMatch}`;
    }

    render() {
        const newsArr = JSON.parse(localStorage.getItem('news'));
        if (newsArr && newsArr.length) {
            this._requestHandler();
            const newsDateArr = this._dateHandler(newsArr);
            for (let key in newsDateArr) {
                const analysisItem = document.createElement('div');
                analysisItem.classList.add('analysis__item');
                analysisItem.insertAdjacentHTML('beforeEnd', `
                    <p class="analysis__date">
                        <span class="analysis__date_day_month">${key}</span> 
                    </p>
                    <div class="analysis__graph">${newsDateArr[key]}</div>         
                `);
                analysisItem.querySelector('.analysis__graph').setAttribute('style', `width: calc((100% - 104px)*${newsDateArr[key]}/100)`)
                
                this.itemsContainer.append(analysisItem);   
            }
        }
    }
}