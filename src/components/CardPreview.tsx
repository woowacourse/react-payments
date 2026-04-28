import { useMemo } from 'react';

interface CardPrivewProps {
  cardnumber: string;
  expiryMonth: string;
  expiryYear: string;
}

function CardPreview(props: CardPrivewProps) {
  const cardNumbers = useMemo(() => {
    const numbersArray: string[][] = [];

    props.cardnumber.split('').forEach((number) => {
      if (numbersArray.length === 0) numbersArray.push([]);

      const lastArrayIndex = numbersArray.length - 1;

      if (numbersArray[lastArrayIndex].length < 4) numbersArray[lastArrayIndex].push(lastArrayIndex < 2 ? number : '*');
      else numbersArray.push([lastArrayIndex < 1 ? number : '*']);
    });

    return numbersArray;
  }, [props.cardnumber]);

  const brand = useMemo(() => {
    if (props.cardnumber.startsWith('4')) return 'VISA';
    if (/^(51)|(52)|(53)|(54)|(55)/g.test(props.cardnumber)) return 'MasterCard';
    return null;
  }, [props.cardnumber]);

  return (
    <div>
      <div>{brand}</div>
      <div>
        {cardNumbers.map((cardNumber: string[], index: number) => (
          <span key={index}>{cardNumber}</span>
        ))}
      </div>
      <div>
        <span>{props.expiryMonth}</span>
        {!!props.expiryYear.length && <span>/</span>}
        <span>{props.expiryYear}</span>
      </div>
    </div>
  );
}

export default CardPreview;
