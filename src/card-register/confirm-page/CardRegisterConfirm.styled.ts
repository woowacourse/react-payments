import styled from '@emotion/styled';

export const CardRegisterConfirm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 70vh;
  position: relative;

  h2 {
    margin-bottom: 40px;
  }

  button {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
`;

export const CardNameInput = styled.input`
  padding: 0px 0px 6px;
  width: 241px;
  background-color: rgb(255, 255, 255);
  border-bottom: 1.5px solid rgb(115, 115, 115);
  color: rgb(56, 56, 56);
  border-radius: 0px;
  align-self: center;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  text-align: center;
  border: none;
  border-bottom: 1px solid black;
`;
