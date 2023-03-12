import { Player } from '@vimeo/player';
const player = new Player('vimeo-player');

import throttle from 'lodash.throttle';
import throttle from 'lodash.throttle';


player.on('timeupdate', throttle(function handleTimeUpdate(data) {
    const currentTime = data.seconds;
    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime));
}, 1000));

const storedTimeStr = localStorage.getItem("videoplayer-current-time");
if (storedTimeStr) {
    const storedTime = JSON.parse(storedTimeStr);
    player.setCurrentTime(storedTime).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });
}





