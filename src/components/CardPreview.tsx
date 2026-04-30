import type { CardBrand, CardNumberSegments } from '../types';

interface CardPrivewProps {
  cardBrand: CardBrand;
  cardNumberSegments: CardNumberSegments;
  expiryMonth: string;
  expiryYear: string;
}

function CardPreview(props: CardPrivewProps) {
  return (
    <div>
      <div>{props.cardBrand}</div>
      <div>
        {props.cardNumberSegments.map((segments: string, index: number) => (
          <span key={index}>{index < 2 ? segments : segments.replaceAll(/./g, '*')}</span>
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
