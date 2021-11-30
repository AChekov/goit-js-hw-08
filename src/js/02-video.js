// import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);
const onPlay = function (date) {
  localStorage.setItem('videoplayer-current-time', date.seconds);
  console.log(parseInt(localStorage.getItem('videoplayer-current-time')));
};

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });

player.on('timeupdate', throttle(onPlay, 1000));
