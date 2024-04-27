import Button from '../Button';
import { COLOR } from '../../styles/color';
import { CardIssuer } from '../../type';
import ISSUER_KOREAN from '../../constants/issuerKorean';
import { Link } from 'react-router-dom';
import PATH from '../../constants/path';
import registerComplete from '../Images/register_complete.png';
import styled from '@emotion/styled';

interface Props {
  start: string;
  issuer: CardIssuer;
  resetCardInfo: () => void;
}

export default function CompletePaymentRegister({
  start,
  issuer,
  resetCardInfo,
}: Props) {
  const cardIssuerKorean = ISSUER_KOREAN[issuer];
  return (
    <CompleteWrapper>
      <CompleteContentsContainer>
        <img src={registerComplete} alt='register complete' />
        <CompleteSpan>
          {start}로 시작하는
          <p>{cardIssuerKorean}가 등록되었어요.</p>
        </CompleteSpan>
        <Link to={PATH.payments}>
          <Button onClick={resetCardInfo} autoFocus>
            확인
          </Button>
        </Link>
      </CompleteContentsContainer>
    </CompleteWrapper>
  );
}

const CompleteWrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const CompleteContentsContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
});

const CompleteSpan = styled.div({
  display: 'inline-block',
  padding: '20px',
  width: '338px',
  fontWeight: 700,
  fontSize: '25px',
  lineHeight: '36.2px',
  color: COLOR.gray4,
  textAlign: 'center',
  wordBreak: 'keep-all',
});
