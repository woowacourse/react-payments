import styled from '@emotion/styled';

const Container = styled.h2`
  display: flex;
  align-items: center;

  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.375rem;
  color: #383838;
  margin: 0 0 1.25rem;

  &::before {
    content: '<';
    font-size: 0.875rem;
    margin-right: 0.938rem;
    transform: scaleX(1.7);
    color: #999;
  }
`;

export default Container;
