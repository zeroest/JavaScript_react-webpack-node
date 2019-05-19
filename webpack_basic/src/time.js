
import moment from 'moment';

export function currentTime(){
    // const date = new Date();
    // const hours = date.getHours();
    // const minutes = date.getMinutes();
    // const seconds = date.getSeconds();
    // return `${hours} : ${minutes} : ${seconds}`;
    return moment().format('H:m:s')
}

 