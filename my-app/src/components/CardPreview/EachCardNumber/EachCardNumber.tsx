import MaskingImg from '../../../assets/MaskingImg.png';
import { NumberGroup, MaskingGroup } from './EachCardNumber.styles';

interface Props {
  cardNumber: string;
  index: number;
}

export default function EachCardNumber({ cardNumber, index }: Props) {
  const digits = Array.from(cardNumber);

  if (index >= 2) {
    return (
      <MaskingGroup>
        {digits.map((_, digitIndex) => (
          <img key={digitIndex} src={MaskingImg} alt="masking-img" />
        ))}
      </MaskingGroup>
    );
  }

  return (
    <NumberGroup>
      {digits.map((number, digitIndex) => (
        <p key={digitIndex}>{number}</p>
      ))}
    </NumberGroup>
  );
}
