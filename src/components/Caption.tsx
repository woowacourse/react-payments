import styled from 'styled-components';

const Caption = () => {
  return <StyledCaption></StyledCaption>;
};

export const StyledCaption = styled.p`
  color: var(--caption-color);
  font-size: 12px;
  margin: 8px 0 16px 4px;
`;

export default Caption;
