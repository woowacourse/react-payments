import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <TitleContainer>{title}</TitleContainer>;
};

const TitleContainer = styled.h3`
  font-weight: 700;
  font-size: 18px;

  color: #575757;

  opacity: 0.9;
`;

export default Title;
