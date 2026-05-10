import { CARD_BRANDS } from '../../constants/constants';
import { Wrapper, Message, ConfirmButton } from './CompletePage.styles';
import checkIcon from '../../assets/check.svg';

interface Props {
  cardNumberFirstSegment: string;
  cardBrand: string;
}
//카드번호 맨 앞 4자리와 카드 브랜드를 보여주는 확인 페이지 컴포넌트
export default function CompletePage({
  cardNumberFirstSegment,
  cardBrand,
}: Props) {
  const brandLabel = CARD_BRANDS[cardBrand]?.label ?? '';

  return (
    <Wrapper>
      <img src={checkIcon} alt="check" />
      <Message>
        {cardNumberFirstSegment}로 시작하는
        <br />
        {brandLabel}가 등록되었어요.
      </Message>
      <ConfirmButton>확인</ConfirmButton>
    </Wrapper>
  );
}
