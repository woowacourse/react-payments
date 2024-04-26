import * as Styled from './style';
import SuccessIcon from '../../assets/image/success.svg';
import Button from '../../components/Button/Button';

const SuccessRegister = () => {
  const cardInfo = `5511로 시작하는
  BC카드가 등록되었어요.`;
  return (
    <Styled.Container>
      <Styled.SuccessIcon src={SuccessIcon} alt="" />
      <Styled.CardInfo>{cardInfo}</Styled.CardInfo>
      <Styled.BackButton>
        <Button label="확인" style={{ borderRadius: 8 }} />
      </Styled.BackButton>
    </Styled.Container>
  );
};

export default SuccessRegister;
