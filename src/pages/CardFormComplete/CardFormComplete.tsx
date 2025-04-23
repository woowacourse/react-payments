import { useSearchParams } from 'react-router-dom';
import { Button } from '../../component/@common/Button/Button';
import Title from '../../component/@common/Title/Title';
import {
  cardDetailContainer,
  cardDetailText,
  cardFormCompleteLayout,
  contentStyle,
  detailsStyle,
} from './CardFormComplete.style';
import useEasyNavigate from '../../hooks/useEasyNavigate';

const CardFormComplete = () => {
  const { goHome } = useEasyNavigate();

  const [searchParams] = useSearchParams();
  const { cardNumber, cardBrand } = Object.fromEntries(searchParams);

  const handleButtonClick = () => {
    goHome();
  };

  return (
    <section css={cardFormCompleteLayout}>
      <div css={contentStyle}>
        <Title>
          <Title.Text>카드 등록이 완료되었습니다!</Title.Text>
          <Title.SubTitle>
            카드 정보가 성공적으로 처리되었습니다.
          </Title.SubTitle>
        </Title>

        <div css={detailsStyle}>
          <span css={cardDetailText}>카드 종류:</span>
          <div css={cardDetailContainer}>
            <span css={cardDetailText}>{cardNumber}로 시작하는</span>
            <span css={cardDetailText}>{cardBrand.toUpperCase()}</span>
          </div>
        </div>

        <Button variant="large" onClick={handleButtonClick}>
          처음으로 돌아가기
        </Button>
      </div>
    </section>
  );
};

export default CardFormComplete;
