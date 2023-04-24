import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as BlackDot } from '../../assets/black-dot.svg';
import useWrappingContext from '../../hooks/useWrappingContext';
import CardListStore from '../../store';
import PaymentsInput from '../PaymentsInput';
import QuestionToolTip from '../QuestionToolTip';
import useCardForm from './hooks/useCardForm';
import type { CardInformation } from '../Common/Card/types';

interface CardRegistrationFormProps {
  setCard: (card: CardInformation) => void;
}

function CardRegistrationForm({ setCard }: CardRegistrationFormProps) {
  const { card, setCardNumber, setExpirationDate, setOwner, setPassword, setSecurityCode } = useCardForm();
  const navigate = useNavigate();
  const { dispatchCardList } = useWrappingContext(CardListStore);
  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatchCardList(card);
    navigate('/');
  };

  useEffect(() => {
    setCard(card);
  }, [card, setCard]);

  return (
    <StyledCardRegistrationFrom onSubmit={handleForm}>
      <PaymentsInput
        name="카드 번호"
        inputListInformation={{
          inputInformation: [
            { type: 'string', maxLength: 4, textAlign: 'center', placeholder: '1234' },
            { type: 'string', maxLength: 4, textAlign: 'center', placeholder: '1234' },
            { type: 'password', maxLength: 4, textAlign: 'center', placeholder: '1234' },
            { type: 'password', maxLength: 4, textAlign: 'center', placeholder: '1234' },
          ],
          bridgeLetter: '-',
          regExp: /[^0-9]/g,
          getInputListValue: setCardNumber,
        }}
      />
      <PaymentsInput
        name="만료일"
        inputListInformation={{
          inputInformation: [
            { type: 'string', maxLength: 2, textAlign: 'center', placeholder: 'MM' },
            { type: 'string', maxLength: 2, textAlign: 'center', placeholder: 'YY' },
          ],
          bridgeLetter: '/',
          regExp: /[^0-9]/g,
          getInputListValue: setExpirationDate,
        }}
      />
      <PaymentsInput
        name="카드 소유자 이름 (선택)"
        inputListInformation={{
          inputInformation: [
            { type: 'string', maxLength: 30, placeholder: '카드에 표시된 이름과 동일하게 입력하세요.' },
          ],
          regExp: /[^a-z|A-Z]/g,
          getInputListValue: setOwner,
        }}
      />
      <PaymentsInput
        name="보안 코드(CVC/CVV)"
        inputListInformation={{
          inputInformation: [{ type: 'password', textAlign: 'center', maxLength: 3 }],
          regExp: /[^0-9]/g,
          getInputListValue: setSecurityCode,
          children: (
            <QuestionToolTip questionMessage="CVV/CVC 번호는 카드 뒷 면에 있는 3자리 숫자이며 카드 보안을 위한 번호입니다." />
          ),
        }}
      />
      <PaymentsInput
        name="카드 비밀번호"
        inputListInformation={{
          inputInformation: [
            { type: 'password', textAlign: 'center', maxLength: 1 },
            { type: 'password', textAlign: 'center', maxLength: 1 },
          ],
          bridgeLetter: '',
          regExp: /[^0-9]/g,
          getInputListValue: setPassword,
          children: (
            <>
              <div>
                <BlackDot />
              </div>
              <div>
                <BlackDot />
              </div>
            </>
          ),
        }}
      />
      <NextButton type="submit">다음</NextButton>
    </StyledCardRegistrationFrom>
  );
}

const StyledCardRegistrationFrom = styled.form`
  width: 318px;
  & > * {
    margin-bottom: 20px;
  }
  & > *:nth-child(2) {
    width: 138px;
  }
  & > *:nth-child(4) {
    width: 86px;
  }
`;

const NextButton = styled.button`
  margin-top: 8px;
  background: none;
  border: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  float: right;
`;

export default CardRegistrationForm;
