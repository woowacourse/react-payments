import { useHistory } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { Container } from '../common/common.styles';
import Styled from './CardAddForm.styles';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import InputBox from '../../components/InputBox/InputBox';
import ToolTip from '../../components/ToolTip/ToolTip';
import CardNumberInput from '../../components/CardNumberInput/CardNumberInput';
import PinNumberInput from '../../components/PinNumberInput/PinNumberInput';
import Button from '../../components/Button/Button';
import useInput from '../../hooks/useInput';
import { isNumeric } from '../../utils';

const CardAddForm = () => {
  const history = useHistory();

  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [ownerName, setOwnerName] = useState('');

  const expiryDate = useInput('');
  const CVC = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChangeCardNumber = (event) => {
    const [, , index] = event.target.name.split('-');

    setCardNumbers((state) => {
      const newCardNumbers = [...state];
      newCardNumbers[index] = event.target.value;

      return newCardNumbers;
    });
  };

  const handleChangeOwnerName = (event) => {
    setOwnerName(event.target.value.toUpperCase());
  };

  const cardNumbersAsNumber = useMemo(() => cardNumbers.join(''), [cardNumbers]);

  const expiryDateAsNumber = useMemo(() => expiryDate.value.replace(/[^0-9]/g, ''), [
    expiryDate.value,
  ]);

  const formattedExpiryDate = useMemo(() => {
    const expiryDateChunks = expiryDateAsNumber.match(/.{1,2}/g) || [];
    return expiryDateChunks.join(' / ');
  }, [expiryDateAsNumber]);

  const isValidExpiryDate = useMemo(
    () =>
      expiryDateAsNumber.length > 0 &&
      !(Number(expiryDateAsNumber.slice(0, 2)) > 0 && Number(expiryDateAsNumber.slice(0, 2)) < 13),
    [expiryDateAsNumber]
  );

  const isNumericCardNumbers = useMemo(() => cardNumbers.every(isNumeric), [cardNumbers]);

  return (
    <Container>
      <Header hasBackButton text="카드 추가" onClickBackButton={history.goBack} />
      <Styled.Container>
        <Card
          bgColor="#d2d2d2"
          cardNumbers={cardNumbersAsNumber}
          ownerName={ownerName}
          expiryDate={formattedExpiryDate}
        />
        <form onSubmit={handleSubmit}>
          <Styled.Row>
            <CardNumberInput
              values={cardNumbers}
              onChange={handleChangeCardNumber}
              labelText="카드 번호"
              errorMessage={!isNumericCardNumbers ? '숫자가 아닌 문자가 입력되었어요' : ''}
              isError={!isNumericCardNumbers}
            />
          </Styled.Row>
          <Styled.Row>
            <Styled.ExpiryDate>
              <InputBox
                value={formattedExpiryDate}
                isError={isValidExpiryDate}
                errorMessage={isValidExpiryDate ? '유효하지 않은 만료일 입니다.' : ''}
                onChange={expiryDate.onChange}
                placeholder="MM / YY"
                labelText="만료일"
                maxLength={4 + 3}
                textAlign="center"
                inputmode="numeric"
                required
              />
            </Styled.ExpiryDate>
          </Styled.Row>
          <Styled.Row>
            <InputBox
              value={ownerName}
              onChange={handleChangeOwnerName}
              labelText="카드 소유자 이름 (선택)"
              maxLength={30}
              hasLengthCounter
            />
          </Styled.Row>
          <Styled.Row>
            <Styled.CVC>
              <InputBox
                type="password"
                pattern="^[0-9]*$"
                isError={!isNumeric(CVC.value)}
                errorMessage={!isNumeric(CVC.value) ? '숫자가 아닌 문자가 입력되었어요' : ''}
                inputmode="numeric"
                value={CVC.value}
                onChange={CVC.onChange}
                labelText="보안 코드 (CVC/CVV)"
                maxLength={3}
                required
              />
            </Styled.CVC>
            <Styled.ToolTip>
              <ToolTip buttonText="?" contentText="카드 뒷면의 3자리 숫자를 입력해주세요" />
            </Styled.ToolTip>
          </Styled.Row>
          <Styled.Row>
            <PinNumberInput
              labelText="카드 비밀번호"
              values={['', '']}
              dotCount={2}
              errorMessage=""
              isError={false}
              inputmode="numeric"
              required
            />
          </Styled.Row>
          <Styled.Row right>
            <Button>다음</Button>
          </Styled.Row>
        </form>
      </Styled.Container>
    </Container>
  );
};
export default CardAddForm;
