/* eslint-disable no-restricted-globals */
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { CardInfoListContext } from './../context';
import { Header, Title } from '../components/common/styled';
import GoBackButton from '../components/GoBackButton';
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

const CardNickNameForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  const { state: locationState } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <GoBackButton />
        <Title>카드 닉네임 설정</Title>
      </Header>
      <Main>
        <GuideMessage>
          {locationState?.fromAddCardForm ? '카드등록이 완료되었습니다.' : '카드 닉네임을 수정하세요.'}
        </GuideMessage>
        <CardInfoListContext.Consumer>
          {({ cardInfoList, updateNickNameByIndex }) => (
            <>
              <CardItem size={'large'} isComplete={true} {...cardInfoList[locationState.cardIndex]} />
              <CardNickNameForm
                onSubmit={e => {
                  e.preventDefault();
                  const nickNameInputValue = e.target.elements['nickname-input'].value;
                  if (nickNameInputValue === '' && confirm('닉네임을 지정하지 않고 카드를 등록하시겠습니까?')) {
                    navigate('../react-payments/', {
                      replace: true,
                    });
                    return;
                  }
                  if (confirm(`[${nickNameInputValue}](으)로 카드를 등록하시겠습니까?`)) {
                    updateNickNameByIndex(locationState.cardIndex, nickNameInputValue);
                    navigate('../react-payments/', {
                      replace: true,
                    });
                  }
                }}>
                <CardNickNameInput placeholder={'카드 닉네임'} name="nickname-input" />
                <Button type="submit">확인</Button>
              </CardNickNameForm>
            </>
          )}
        </CardInfoListContext.Consumer>
      </Main>
    </>
  );
}
