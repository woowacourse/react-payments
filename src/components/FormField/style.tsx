import styled from 'styled-components';

export const StyledFormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  width: 100%;
`;

export const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const StyledTitle = styled.h2`
  ${(props) => props.theme.typography.title};
  color: ${(props) => props.theme.color.black};
`;

export const StyledCaption = styled.p`
  ${(props) => props.theme.typography.caption};
  color: ${(props) => props.theme.color.gray};
`;
