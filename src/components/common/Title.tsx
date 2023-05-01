import styled from 'styled-components';

interface TitleProps {
  title: string;
  fontSize?: number;
}

const Title = ({ title, fontSize }: TitleProps) => {
  return <TitleContainer fontSize={fontSize}>{title}</TitleContainer>;
};

const TitleContainer = styled.h3<{ fontSize?: number }>`
  font-weight: 700;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '16px')};
  text-align: center;

  color: var(--dark-grey-color);

  opacity: 0.9;
`;

export default Title;
