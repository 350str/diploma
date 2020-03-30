export class Tools {

    dayHandler(day) {
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

    dateHandler(dateArray) {
        const newData = dateArray.map(article => article.publishedAt.slice(8, 10) 
                                 + ', '
                                 + this.dayHandler(new Date(article.publishedAt.slice(0, 10)).getDay() + 1))
                                 .sort();
        let counter = 1;
        const dataObject = {};
        for (let i = 0; i < newData.length; i++) {     
            if (newData[i] === newData[i + 1]) {
                counter++;
            } else {
                dataObject[newData[i]] = counter;
                counter = 1;
            }    
        }
        return dataObject;
    }
}