import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Title = styled.p`
  margin-top: 20px;
  font-size: 20px;
  cursor: pointer;
`;

const Header = ({ page }: { page: string }) => {
  const navigate = useNavigate();

  return page === 'home' ? (
    <Title>보유카드</Title>
  ) : (
    <Title onClick={() => navigate(-1)}>&lt; &nbsp; 카드 추가</Title>
  );
};

export default Header;
