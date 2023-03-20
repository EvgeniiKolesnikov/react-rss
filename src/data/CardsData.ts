export type cardType = {
  id: number;
  img: string;
  price: number;
  brand: string;
  desc: string;
};

import img1 from '../assets/card/card1.jpg';
import img2 from '../assets/card/card2.jpg';
import img3 from '../assets/card/card3.jpg';
import img4 from '../assets/card/card4.jpg';

const cardsData: cardType[] = [
  {
    id: 1,
    img: img1,
    price: 4800,
    brand: 'Nike',
    desc: 'кроссовки / air force 1 / джорданы',
  },
  {
    id: 2,
    img: img2,
    price: 3250,
    brand: 'SJ MODA',
    desc: 'Кроссовки Air max',
  },
  {
    id: 3,
    img: img3,
    price: 4680,
    brand: 'Dolce Gracia',
    desc: 'Кроссовки летние на платформе',
  },
  {
    id: 4,
    img: img4,
    price: 2170,
    brand: 'Converse',
    desc: 'Кеды',
  },
];

export default cardsData;
