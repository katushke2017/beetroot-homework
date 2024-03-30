import addItem from './add-item.js';
const sonsList = () => {
  const playList = [
    {
      author: 'LED ZEPPELIN',
      song: 'STAIRWAY TO HEAVEN',
    },
    {
      author: 'QUEEN',
      song: 'BOHEMIAN RHAPSODY',
    },
    {
      author: 'LYNYRD SKYNYRD',
      song: 'FREE BIRD',
    },
    {
      author: 'DEEP PURPLE',
      song: 'SMOKE ON THE WATER',
    },
    {
      author: 'JIMI HENDRIX',
      song: 'ALL ALONG THE WATCHTOWER',
    },
    {
      author: 'AC/DC',
      song: 'BACK IN BLACK',
    },
    {
      author: 'QUEEN',
      song: 'WE WILL ROCK YOU',
    },
    {
      author: 'METALLICA',
      song: 'ENTER SANDMAN',
    },
  ];

  playList.forEach((e) => addItem(e.author, e.song));
};

export default sonsList;
