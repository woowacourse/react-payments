import { useNavigate } from 'react-router';
import Button from '../components/common/Button/Button';
import { PAGE_URL } from '../constants/pageUrl';
import styled from '@emotion/styled';

function Notfound() {
  const navigate = useNavigate();

  const navigateToAddCard = () => {
    navigate(PAGE_URL.ADD_CARD);
  };

  return (
    <Layout>
      유효하지 않은 페이지입니다!
      <Button
        customStyle={NotFoundButton}
        text="카드 추가하기"
        type="button"
        onClick={navigateToAddCard}
      />
    </Layout>
  );
}

export default Notfound;

const Layout = styled.main`
  width: 100%;
  max-width: 400px;

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 70px 30px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px;
`;

const NotFoundButton = {
  width: '100%',
  padding: '12px 0',
  backgroundColor: '#000000ba',
  color: '#ffffff',
  border: 'none',
  transition: 'background-color 0.3s ease-in-out',
  cursor: 'pointer',
  borderRadius: '4px',
  fontSize: '16px',
  fontWeight: '700',

  ':hover': {
    backgroundColor: '#000000',
  },
};
