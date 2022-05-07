import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  margin-top: 100px;
`;

export const CardAlias = styled.h4`
  margin-top: 20px;
  text-align: center;
`;

export const AddCardButton = styled.div`
  margin-bottom: 40px;
  width: 208px;
  height: 130px;
  background-color: #e5e5e5;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  cursor: pointer;
  font-size: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  > p {
    transition: transform 0.3s ease;
  }

  &:hover > p {
    transform: rotate(95deg);
  }
`;
