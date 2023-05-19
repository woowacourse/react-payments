import { CardInfo } from '../types/card';

const DELAY = 1200;

export const fetchCard = async () => {
  return new Promise<CardInfo>((resolve, reject) => {
    setTimeout(() => {
      fetch('./mockData.json')
        .then((response) => {
          if (!response.ok) {
            throw new Error('카드 정보를 불러오는 데 실패했습니다.');
          }

          return response.json();
        })
        .then(resolve)
        .catch(reject);
    }, DELAY);
  });
};
