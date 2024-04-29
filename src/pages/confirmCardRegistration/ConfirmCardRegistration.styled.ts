import styled from "styled-components";

export const ConfirmCardRegistrationContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  width: 376px;
  height: 100vh;
  padding: 0 30px;
  margin: auto;
`;

export const CheckIcon = styled.img`
  width: 76px;
  height: 76px;
`;

export const Text = styled.h1`
  font-size: 25px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
  white-space: pre-line;
`;

export const Button = styled.button`
  width: 90%;
  height: 44px;
  border-radius: 5px;
  color: #ffffff;
  background: #333333;
  line-height: 44px;
  text-align: center;
  cursor: pointer;
`;
