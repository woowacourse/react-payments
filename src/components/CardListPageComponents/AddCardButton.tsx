import styled from 'styled-components';

const AddCardButton = () => {
  return <AddCardButtonBox>+</AddCardButtonBox>;
};

const AddCardButtonBox = styled.button`
  width: 208px;
  height: 123px;

  border: none;

  background: #e5e5e5;
  border-radius: 5px;

  font-size: 30px;

  cursor: pointer;
`;

export default AddCardButton;
