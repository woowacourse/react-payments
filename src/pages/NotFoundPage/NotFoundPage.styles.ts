import styled from '@emotion/styled';
import { Link } from 'react-router';

export const ErrorContainer = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 6rem;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const HomeLink = styled(Link)`
  font-size: 1.2rem;
  color: blue;
  text-decoration: underline;
`;
