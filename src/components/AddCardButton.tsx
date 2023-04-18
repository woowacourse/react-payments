import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: #575757;
`;

const Button = styled.button`
  width: 208px;
  height: 124px;
  background-color: #e5e5e5;
  border-radius: 5px;
  text-align: center;
  font-size: 30px;
`;

const AddCardButton = () => {
  return (
    <LinkWrapper to={'/add-card'}>
      <Button>+</Button>
    </LinkWrapper>
  );
};

export default AddCardButton;
