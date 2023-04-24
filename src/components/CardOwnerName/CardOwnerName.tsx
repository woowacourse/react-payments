import { useRef } from 'react';
import CardInput from '../CardInput/CardInput';
import CardLabel from '../CardLabel/CardLabel';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ecebf1;
  border-radius: 7px;
  margin-bottom: 20px;
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface CardOwnerNameProps {
  cardOwnerName: string;
  setCardOwnerName: React.Dispatch<React.SetStateAction<string>>;
}

const CardOwnerName = ({
  cardOwnerName,
  setCardOwnerName,
}: CardOwnerNameProps) => {
  const nameRef = useRef<HTMLInputElement>(null);

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    if (e.target.value.length === 0) setCardOwnerName('');
    if (/[^A-Za-z\s]+$/.test(e.target.value)) return;

    setCardOwnerName(e.target.value.toUpperCase());
  };

  return (
    <>
      <LabelWrapper>
        <CardLabel labelText="카드 소유자 이름(선택)" />
        <CardLabel labelText={`${nameRef.current?.value.length || 0} / 30`} />
      </LabelWrapper>
      <Wrapper>
        <CardInput
          type="text"
          maxLength={30}
          ref={nameRef}
          onChange={handleCardInputChange}
          value={cardOwnerName}
          placeholder="카드에 표시된 영어 이름을 입력하세요."
        />
      </Wrapper>
    </>
  );
};

export default CardOwnerName;
