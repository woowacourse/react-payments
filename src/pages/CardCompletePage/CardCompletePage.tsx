import Button from '../../components/Button/Button';
import { useCardRouter } from '../../hooks/useCardRouter';
import { StyledCardCompletePage, StyledIcon, StyledTitle } from './CardCompletePage.styles';

const CardCompletePage = () => {
  const { cardInfo, navigateToHome } = useCardRouter();
  const { cardNumber, cardCompany } = cardInfo;

  return (
    <StyledCardCompletePage>
      <StyledIcon src="/check.png" />
      <StyledTitle>
        {cardNumber && cardNumber[0]}로 시작하는 <br />
        {cardCompany}가 등록되었어요.
      </StyledTitle>

      <Button style={{ borderRadius: '8px' }} onClick={navigateToHome}>
        확인
      </Button>
    </StyledCardCompletePage>
  );
};

export default CardCompletePage;
