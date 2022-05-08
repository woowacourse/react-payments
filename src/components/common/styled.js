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

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'unset'};
  align-items: ${(props) => props.alignItems || 'unset'};
  gap: ${(props) => props.gap || 'unset'};
`;

export const InputBasic = styled.input`
  background-color: #ecebf1;
  color: #04c09e;
  height: 45px;
  width: ${(props) => props.width || '100%'};
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
  color: ${(props) => props.color || '#d3d3d3'};
  border-radius: 0.25rem;
  background-color: ${(props) => props.backgroundColor || '#ecebf1'};
  width: ${(props) => props.width || 'unset'};
  justify-content: ${(props) => props.justifyContent || 'unset'};
  padding: ${(props) => props.padding || '0'};
`;

export const Layout = styled.div`
  min-height: 680px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
