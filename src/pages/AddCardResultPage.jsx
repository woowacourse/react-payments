/* eslint-disable no-restricted-globals */
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { CardInfoListContext } from './../context';
import CardItem from '../components/CardItem';
import Button from './../components/common/Button';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GuideMessage = styled.p`
  margin: 130px auto 80px;

  font-size: 22px;
  line-height: 24px;
  color: #383838;
`;

const CardNickNameInput = styled.input`
  width: 240px;
  height: 30px;
  margin: 30px 0;
  border: none;
  border-bottom: 1.5px solid #737373;

  text-align: center;
  font-size: 18px;
  line-height: 21px;
  color: #383838;

  &:focus {
    outline: none;
  }
`;

export default function AddCardResultPage() {
  const [nickName, setNickName] = useState('');

  const { state: locationState } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Main>
        <GuideMessage>
          {locationState?.fromAddCardForm ? '카드등록이 완료되었습니다.' : '카드 닉네임을 수정하세요.'}
        </GuideMessage>
        <CardInfoListContext.Consumer>
          {({ cardInfoList, updateNickNameByIndex }) => (
            <>
              <CardItem size={'large'} isComplete={true} {...cardInfoList[locationState.cardIndex]} />
              <CardNickNameInput
                placeholder={'카드 닉네임'}
                onChange={e => {
                  setNickName(e.target.value);
                }}
              />
              <Button
                type="submit"
                onClick={e => {
                  e.preventDefault();
                  if (nickName === '' && confirm('닉네임을 지정하지 않고 카드를 등록하시겠습니까?')) {
                    navigate('../react-payments/', {
                      replace: true,
                    });
                    return;
                  }
                  if (confirm('이 닉네임으로 카드를 등록하시겠습니까?')) {
                    updateNickNameByIndex(locationState.cardIndex, nickName);
                    navigate('../react-payments/', {
                      replace: true,
                    });
                  }
                }}>
                확인
              </Button>
            </>
          )}
        </CardInfoListContext.Consumer>
      </Main>
    </>
  );
}
