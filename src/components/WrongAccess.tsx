import Button from './Button';
import { COLOR } from '../styles/color';
import { Link } from 'react-router-dom';
import PATH from '../constants/path';
import styled from '@emotion/styled';
import wrongCat from '../Images/wrong_cat.png';

interface Props {
  setLastPath: () => void;
}

export default function WrongAccess({ setLastPath }: Props) {
  setLastPath();
  return (
    <CompleteWrapper>
      <CompleteContentsContainer>
        <img src={wrongCat} alt='register complete' width={'150px'} />
        <CompleteSpan>날 다시 보러 와준거냥?</CompleteSpan>
        고양이를 보려던게 아니시라면... <p>잘못된 접근인 것 같네요.</p>
        <Link to={PATH.payments}>
          <Button autoFocus>메인화면으로</Button>
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
  padding: '0px 20px',
  width: '338px',
  fontWeight: 700,
  fontSize: '25px',
  lineHeight: '36.2px',
  color: COLOR.gray4,
  textAlign: 'center',
  wordBreak: 'keep-all',
});
