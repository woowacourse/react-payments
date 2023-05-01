import styled from 'styled-components';
import { CONVERT_BANK_NAME } from '../../utils/Constants';
import { useContext, useState } from 'react';
import { CardContext } from '../../context/CardContext';

interface BankItemProps {
  bankName: string;
  onClose: () => void;
}

const BankItem = ({ bankName, onClose }: BankItemProps) => {
  const [isError, setIsError] = useState(false);
  const { setBankName } = useContext(CardContext);

  const handleImageError = () => {
    setIsError(true);
  };

  const handleBankName = () => {
    setBankName(bankName);
    onClose();
  };

  return (
    <BankItemContainer>
      <BankButton onClick={handleBankName}>
        {isError ? (
          <ErrorEmoji>🏦</ErrorEmoji>
        ) : (
          <BankImage
            src={`images/${CONVERT_BANK_NAME[bankName]}.png`}
            alt={bankName}
            onError={handleImageError}
            loading='lazy'
          />
        )}
      </BankButton>
      <span>{bankName}</span>
    </BankItemContainer>
  );
};

const BankItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BankButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`;

const BankImage = styled.img`
  margin-bottom: 10px;
  width: 37px;
  height: 37px;

  box-sizing: border-box;

  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all 200ms ease-in-out;
  }
`;

const ErrorEmoji = styled.span`
  font-size: 37px;
`;

export default BankItem;
