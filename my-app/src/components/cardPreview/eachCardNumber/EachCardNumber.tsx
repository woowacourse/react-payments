import MaskingImg from '../../../assets/MaskingImg.png';
import { NumberGroup, MaskingGroup } from './EachCardNumber.styles';

interface Props {
  cardNumber: string;
  index: number;
}

 const EachCardNumber = ({cardNumber, index}: Props) => {
  if (index >= 2) {
    return (
      <MaskingGroup>
        {Array.from(cardNumber).map(() => (
          <img src={MaskingImg} alt="masking-img" />
        ))}
      </MaskingGroup>
    );
  }

  return (
    <NumberGroup>
      {Array.from(cardNumber).map((number) => (
        <p>{number}</p>
      ))}
    </NumberGroup>
  );
}

export default EachCardNumber
