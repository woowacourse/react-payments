import { useHistory } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { Container } from '../common/common.styles';
import Styled from './CardAddForm.styles';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import InputBox from '../../components/InputBox/InputBox';
import ToolTip from '../../components/ToolTip/ToolTip';
import PinNumberInput from '../../components/PinNumberInput/PinNumberInput';
import Button from '../../components/Button/Button';
import useInput from '../../hooks/useInput';
import { isNumeric } from '../../utils';

const CardAddForm = () => {
  const history = useHistory();

  const [cardNumbers, setCardNumbers] = useState('');
  const [ownerName, setOwnerName] = useState('');

  const expiryDate = useInput('');
  const CVC = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChangeCardNumber = (event) => {
    // TODO: state에 마스킹된 카드 번호가 그대로 들어가는 문제 해결 필요
    setCardNumbers(event.target.value);
  };

  const handleChangeOwnerName = (event) => {
    setOwnerName(event.target.value.toUpperCase());
  };

  const cardNumbersAsNumber = useMemo(() => cardNumbers.replace(/-/g, '').replace(/\s/g, ''), [
    cardNumbers,
  ]);

  const expiryDateAsNumber = useMemo(() => expiryDate.value.replace(/[^0-9]/g, ''), [
    expiryDate.value,
  ]);

  const formattedCardNumber = useMemo(() => {
    const cardNumberChunks = cardNumbersAsNumber.match(/.{1,4}/g) || [];

    return cardNumberChunks
      .map((chunk, index) => {
        if (index <= 1) return chunk;

        return chunk.replace(/[0-9]/g, '•');
      })
      .join(' - ');
  }, [cardNumbersAsNumber]);

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

  return (
    <Container>
      <Header hasBackButton text="카드 추가" onClickBackButton={history.goBack} />
      <Styled.Container>
        <Card
          bgColor="#d2d2d2"
          cardNumbers={formattedCardNumber}
          ownerName={ownerName}
          expiryDate={formattedExpiryDate}
        />
        <form onSubmit={handleSubmit}>
          <Styled.Row>
            <InputBox
              pattern="^[0-9]*$"
              isError={!isNumeric(cardNumbersAsNumber)}
              errorMessage={!isNumeric(cardNumbersAsNumber) ? '숫자를 입력해주세요.' : ''}
              inputmode="numeric"
              value={formattedCardNumber}
              onChange={handleChangeCardNumber}
              labelText="카드 번호"
              maxLength={16 + 9}
              textAlign="center"
              required
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
                errorMessage={!isNumeric(CVC.value) ? '숫자를 입력해주세요.' : ''}
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
