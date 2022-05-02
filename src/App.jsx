import { memo } from 'react';

import styled from 'styled-components';

import useCardNumber from './hooks/useCardNumber';
import useValidDate from './hooks/useValidDate';
import useCardOwnerName from './hooks/useCardOwnerName';
import useCVC from './hooks/useCVC';
import useCardPassword from './hooks/useCardPassword';
import useModal from './hooks/useModal';

import Modal from './components/Modal';
import Button from './components/common/Button';
import Card from './components/common/Card';
import Input from './components/common/Input';

import { ReactComponent as Arrow } from './assets/arrow.svg';

import { RULE } from './constants';

const StyledPage = styled.form`
  background: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 400px;
  height: 757px;
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 25px;
`;

const Title = styled.span`
  font-size: 16px;
  margin-left: 18px;
`;

const StyledCard = styled(Card)`
  align-self: center;
  margin-bottom: 25px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 19px;
`;

const CardOwnerNameLength = styled.div`
  color: #525252;
  font-size: 12px;
  float: right;
`;

const Bullet = styled.span`
  color: #04c09e;
  margin-right: 35px;
`;

const NextButton = styled(Button)`
  align-self: end;
`;

function App() {
  const [cardNumber, setCardNumber, encryptedCardNumber] = useCardNumber('');
  const [cardOwnerName, setCardOwnerName] = useCardOwnerName('');
  const [validDate, setValidDate] = useValidDate('');
  const [CVC, setCVC] = useCVC('');
  const [firstPassword, setFirstPassword] = useCardPassword('');
  const [secondPassword, setSecondPassword] = useCardPassword('');
  const requiredList = [
    cardNumber,
    validDate,
    CVC,
    firstPassword,
    secondPassword,
  ];
  const [isModalOpen, toggleIsModalOpen] = useModal(false);

  return (
    <StyledPage>
      <Header>
        <Button size="small" content={<Arrow />} />
        <Title>카드 추가</Title>
      </Header>
      <StyledCard
        bgColor="#ADD8E6"
        size="medium"
        name={cardOwnerName}
        number={encryptedCardNumber}
        validDate={validDate}
      />
      <InputGroup>
        <div>
          <Input
            description="카드 번호"
            value={encryptedCardNumber}
            onChangeFunc={setCardNumber}
          />
        </div>
        <div>
          <Input
            description="만료일"
            placeholder="MM / YY"
            width="137px"
            value={validDate}
            onChangeFunc={setValidDate}
          />
        </div>
        <div>
          <CardOwnerNameLength>
            {cardOwnerName.length}/{RULE.CARD_OWNER_NAME_MAX_LENGTH}
          </CardOwnerNameLength>
          <Input
            description="카드 소유자 이름 (선택)"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            value={cardOwnerName}
            onChangeFunc={setCardOwnerName}
          />
        </div>
        <div>
          <Input
            description="보안 코드(CVC/CVV)"
            type="password"
            width="84px"
            value={CVC}
            onChangeFunc={setCVC}
          />
          <Button
            border="1px solid #BABABA"
            color="#969696"
            content="?"
            margin={{ l: '11px' }}
            shape="circle"
            size="small"
            onClickFunc={toggleIsModalOpen}
          />
          <Modal visible={isModalOpen} />
        </div>
        <div>
          <Input
            description="카드 비밀번호"
            margin={{ r: '7px' }}
            type="password"
            width="43px"
            value={firstPassword}
            onChangeFunc={setFirstPassword}
          />
          <Input
            margin={{ r: '26px' }}
            type="password"
            width="43px"
            value={secondPassword}
            onChangeFunc={setSecondPassword}
          />
          <Bullet>•</Bullet>
          <Bullet>•</Bullet>
        </div>
      </InputGroup>
      {requiredList.every(value => value !== '') && (
        <NextButton color="#04C09E" content="다음" fontWeight="bold" />
      )}
    </StyledPage>
  );
}

export default memo(App);
