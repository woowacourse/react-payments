export const fetchData = (data: any): void => {
  const getData = localStorage.getItem('cardList');
  if (getData) {
    const dataToArr = JSON.parse(getData);
    dataToArr.push(data);
    localStorage.setItem('cardList', JSON.stringify(dataToArr));
    return;
  }

  localStorage.setItem('cardList', JSON.stringify([data]));
};
