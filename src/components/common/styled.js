import styled from 'styled-components';

export const InputContainer = styled.div`
  margin: 16px 0;
`;

export const InputTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 12px;
  line-height: 14px;

  margin-bottom: 4px;

  color: #525252;
`;

export const InputBasic = styled.input`
  background-color: #ecebf1;
  color: #04c09e;
  height: 45px;
  width: 100%;
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  font-size: 18px;
  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.375rem;
  color: #d3d3d3;
  border-radius: 0.25rem;
  background-color: #ecebf1;
`;

export const Layout = styled.div`
  min-height: 680px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
