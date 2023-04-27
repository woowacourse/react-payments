import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import theme from '../../styles/theme';

const Title = styled.p`
  margin-top: 20px;
  font: ${theme.font.title};
  cursor: pointer;
`;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const page = location.pathname;

  return page === '/' ? (
    <Title>보유카드</Title>
  ) : (
    <Title onClick={() => navigate(-1)}>&lt; &nbsp; 카드 추가</Title>
  );
};

export default Header;
