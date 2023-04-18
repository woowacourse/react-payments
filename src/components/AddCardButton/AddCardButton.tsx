import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: #575757;
  margin-top: 100px;
`;

const Button = styled.button`
  width: 208px;
  height: 124px;
  background-color: #e5e5e5;
  border-radius: 5px;
  text-align: center;
  font-size: 30px;
  margin-top: 20px;
`;

const AddCardButton = () => {
  return (
    <LinkWrapper to={'/add-card'}>
      <Button>+</Button>
    </LinkWrapper>
  );
};

export default AddCardButton;
