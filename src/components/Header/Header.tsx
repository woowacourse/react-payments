import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const Title = styled.p`
  margin-top: 20px;
  font: ${(props) => props.theme.font.title};
  cursor: pointer;
`;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const page = location.pathname;

  const createHeader = () => {
    switch (page) {
      case '/':
        return <Title>보유카드</Title>;
      case '/add-card':
        return (
          <Title onClick={() => navigate(-1)}>&lt; &nbsp; 카드 추가</Title>
        );
      case '/register-card':
        return (
          <Title onClick={() => navigate(-1)}>&lt; &nbsp; 카드 등록</Title>
        );
    }
  };

  return <>{createHeader()}</>;
};

export default Header;
