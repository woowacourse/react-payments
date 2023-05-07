import { useNavigate } from 'react-router-dom';
import { PATHNAME } from '../../../constants/pathname';
import * as Styled from './LoadingPage.styled';
import { Spinner } from '../../Spinner/Spinner';

export const LoadingPage = () => {
  const navigation = useNavigate();

  // setTimeout(() => {
  //   navigation(PATHNAME.NICKNAME);
  // }, 3000);

  return (
    <Styled.LoadingPageLayout>
      <Spinner />
    </Styled.LoadingPageLayout>
  );
};
