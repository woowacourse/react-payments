import { useNavigate } from 'react-router-dom';

import { PATHNAME } from '../../constants/pathname';

import * as Styled from './CompleteBox.styled';
import { Paragraph } from '../LoadingBox/LoadingBox.styled';

export const CompleteBox = () => {
  const navigation = useNavigate();

  return (
    <Styled.CompleteBox>
      <Paragraph>카드 등록이 완료되었어요</Paragraph>
      <Styled.ConfirmButton
        onClick={() => navigation(PATHNAME.NICKNAME)}
        autoFocus={true}
      >
        다음
      </Styled.ConfirmButton>
    </Styled.CompleteBox>
  );
};
