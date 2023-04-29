import styled from 'styled-components';

export const SecurityNumbers = styled.div`
  position: relative;
`;

export const LabelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 600;

  margin-bottom: 7px;
`;

export const ErrorMessage = styled.span`
  position: absolute;
  bottom: -20px;
  left: 0;

  color: red;

  font-size: 13px;
  font-weight: 600;
`;
