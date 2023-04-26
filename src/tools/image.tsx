/* eslint-disable import/prefer-default-export */
import bcImage from '../assets/bc.png';
import shinhanImage from '../assets/shinhan.png';
import kakaoImage from '../assets/kakao.png';
import hyundaiImage from '../assets/hyundai.png';
import wooriImage from '../assets/woori.png';
import lotteImage from '../assets/lotte.png';
import hanaImage from '../assets/hana.png';
import kookminImage from '../assets/kookmin.png';

export const convertImage = (image: string) => {
  switch (image) {
    case 'bc':
      return bcImage;
    case 'shinhan':
      return shinhanImage;
    case 'kakao':
      return kakaoImage;
    case 'hyundai':
      return hyundaiImage;
    case 'woori':
      return wooriImage;
    case 'lotte':
      return lotteImage;
    case 'hana':
      return hanaImage;
    case 'kookmin':
      return kookminImage;
    default:
      return '';
  }
};
