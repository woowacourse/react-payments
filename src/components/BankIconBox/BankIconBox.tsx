import styled from 'styled-components';
import { Banks, KOR_BANK_NAME_BY_BANK, ICON_BY_BANK } from '../../@types/banks';
import { useContext } from 'react';
import { CreditCardContext } from '../../contexts/CreditCardContext';

type Props = {
  bankName: Banks;
  onClose: () => void;
};

const BankIconBox = ({ bankName, onClose }: Props) => {
  const KoreanName = KOR_BANK_NAME_BY_BANK[bankName];
  const setCreditCardInfo = useContext(CreditCardContext)[1];

  const handleClickImage: React.MouseEventHandler<HTMLImageElement> = (event) => {
    const bankName = event.currentTarget?.dataset['bank'] as Banks;

    if (!setCreditCardInfo) return;
    setCreditCardInfo('bank', bankName);
    onClose();
  };

  return (
    <ImageContainer>
      <StyledBankImage
        data-bank={bankName}
        src={ICON_BY_BANK[bankName]}
        onClick={handleClickImage}
      ></StyledBankImage>
      <p>{KoreanName}</p>
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledBankImage = styled.img`
  width: 37px;
  height: 37px;
  margin: auto;
`;

export default BankIconBox;
