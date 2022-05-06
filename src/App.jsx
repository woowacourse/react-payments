import { memo, useReducer } from 'react';

import GlobalStyle from 'GlobalStyle';

import styled from 'styled-components';

import useCardNumber from 'hooks/useCardNumber';
import useValidDate from 'hooks/useValidDate';
import useCardOwnerName from 'hooks/useCardOwnerName';
import useCVC from 'hooks/useCVC';
import useCardPassword from 'hooks/useCardPassword';

import Button from 'components/common/Button';
import Card from 'components/Card';
import CVCTooltip from 'components/CVCTooltip';
import Input from 'components/common/Input';
import CardPickModal from 'components/CardPickModal';
import ModalPortal from 'components/common/ModalPortal';

import { ReactComponent as Arrow } from 'assets/arrow.svg';

import { RULE } from 'constants';

function cardKindReducer(state, action) {
  switch (action.type) {
    case 'SET_CARD_COLOR':
      return {
        ...state,
        color: action.color,
      };
    case 'SET_CARD_TITLE':
      return {
        ...state,
        title: action.title,
      };
  }
}

const Styled = {
  Page: styled.form`
    background: #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 400px;
    height: 757px;
  `,
  Header: styled.div`
    align-items: center;
    display: flex;
    margin-bottom: 25px;
  `,

  Title: styled.span`
    font-size: 16px;
    margin-left: 18px;
  `,

  Card: styled(Card)`
    align-self: center;
    margin-bottom: 25px;
  `,

  InputGroup: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 19px;
  `,

  CardOwnerNameLength: styled.div`
    color: #525252;
    font-size: 12px;
    float: right;
  `,

  Bullet: styled.span`
    color: #04c09e;
    margin-right: 35px;
  `,

  NextButton: styled(Button)`
    align-self: end;
  `,

  CloseButton: styled(Button)`
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 10px;
  `,
};

function App() {
  const [cardNumber, setCardNumber, encryptedCardNumber] = useCardNumber('');
  const [cardOwnerName, setCardOwnerName] = useCardOwnerName('');
  const [validDate, setValidDate] = useValidDate('');
  const [CVC, setCVC] = useCVC('');
  const [firstPassword, setFirstPassword] = useCardPassword('');
  const [secondPassword, setSecondPassword] = useCardPassword('');
  const [isToolTipOpen, toggleToolTip] = useReducer(visible => !visible, false);
  const [isCardPickModal, toggleCardPickModal] = useReducer(
    visible => !visible,
    false
  );
  const [cardKind, setCardKind] = useReducer(cardKindReducer, {
    color: '#ADD8E6',
    title: '공원 카드',
  });

  const requiredList = [
    cardNumber,
    validDate,
    CVC,
    firstPassword,
    secondPassword,
  ];

  return (
    <>
      <GlobalStyle />
      <Styled.Page>
        <Styled.Header>
          <Button size="small">
            <Arrow />
          </Button>
          <Styled.Title>카드 추가</Styled.Title>
        </Styled.Header>
        <Styled.Card
          bgColor={cardKind.color}
          size="medium"
          name={cardOwnerName}
          number={encryptedCardNumber}
          onClickFunc={toggleCardPickModal}
          title={cardKind.title}
          validDate={validDate}
        />
        <Styled.InputGroup>
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
            <Styled.CardOwnerNameLength>
              {cardOwnerName.length}/{RULE.CARD_OWNER_NAME_MAX_LENGTH}
            </Styled.CardOwnerNameLength>
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
              margin={{ l: '11px' }}
              shape="circle"
              size="small"
              onClickFunc={toggleToolTip}
            >
              ?
            </Button>
            <CVCTooltip visible={isToolTipOpen} />
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
            <Styled.Bullet>•</Styled.Bullet>
            <Styled.Bullet>•</Styled.Bullet>
          </div>
        </Styled.InputGroup>
        {requiredList.every(value => value !== '') && (
          <Styled.NextButton color="#04C09E" fontWeight="bold">
            다음
          </Styled.NextButton>
        )}
        {isCardPickModal && (
          <ModalPortal>
            <CardPickModal
              setCardKind={setCardKind}
              toggleCardPickModal={toggleCardPickModal}
            />
          </ModalPortal>
        )}
      </Styled.Page>
    </>
  );
}

export default memo(App);
