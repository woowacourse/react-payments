import styled from 'styled-components';

export const Root = styled.header`
  position: relative;
  display: flex;
  align-items: center;

  position: fixed;
  top: 0;
  left: 50%;
  z-index: 99;
  transform: translateX(-50%);

  width: 414px;
  height: 45px;

  padding: 0 25px;
  font-size: 1.2rem;

  background-color: white;
`;

export const HeaderTitle = styled.h1`
  margin-left: 15px;

  font-size: 16px;
  font-weight: 500;
  line-hight: 18.75px;
`;

export const NavigationButton = styled.button`
  width: 24px;
  height: 24px;

  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  cursor: pointer;
`;
