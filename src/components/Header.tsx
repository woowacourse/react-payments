import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navigator from './Navigator';

interface Props {
  title: string;
  navigator: boolean;
}

const Header = ({ title, navigator }: Props) => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/');
  };

  return (
    <StyledHeader>
      {navigator && (
        <Navigator
          width="10"
          height="17"
          viewBox="0 0 10 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={goToMain}
        >
          <path
            d="M8.30426 1L1.36476 8.78658L9.15134 15.7261"
            stroke="#525252"
            strokeWidth="1.5"
          />
        </Navigator>
      )}

      <span>{title}</span>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

export default Header;
