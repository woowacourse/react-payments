import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Title = styled.p`
  margin-top: 20px;
  font-size: 20px;
  cursor: pointer;
`;

interface HeaderProps {
  page: string;
  titleContent: string;
}

const Header = ({ page, titleContent }: HeaderProps) => {
  const navigate = useNavigate();

  return page === 'home' ? (
    <Title>{titleContent}</Title>
  ) : (
    <Title onClick={() => navigate(-1)}>{titleContent}</Title>
  );
};

export default Header;
