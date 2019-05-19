import { currentTime } from './time';

const div = document.createElement('div');
document.body.appendChild(div);
setInterval(()=>{ div.innerHTML = currentTime() , 1000 })


//http://www.daleseo.com/webpack-basics/