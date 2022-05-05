import styled from 'styled-components';
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

const dummyCardInfo = {
  cardNumber: ['1234', '5678', '9012', '3456'],
  holderName: 'SUN',
  expireDate: ['12', '23'],
  isComplete: true,
};

export default function AddCardResultPage() {
  return (
    <>
      <Main>
        <GuideMessage>카드등록이 완료되었습니다.</GuideMessage>
        <CardItem size={'large'} {...dummyCardInfo} />
        <CardNickNameInput placeholder={'카드 별칭'} />
        <Button text={'확인'} />
      </Main>
    </>
  );
}
