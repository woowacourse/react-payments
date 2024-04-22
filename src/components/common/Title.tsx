import styled, { CSSProperties } from 'styled-components';

interface TitleProps extends React.ComponentPropsWithoutRef<'h1'> {
  content: string;
  color?: CSSProperties['color'];
  fontSize?: CSSProperties['fontSize'];
  fontWeight?: CSSProperties['fontWeight'];
  lineHeight?: CSSProperties['lineHeight'];
  marginBottom?: CSSProperties['marginBottom'];
}

const Title = ({ content, color, fontSize, fontWeight, lineHeight, marginBottom, ...props }: TitleProps) => {
  const StyledTitle = styled.h3`
    color: ${color || '#000000'};
    font-size: ${fontSize || '18px'};
    font-weight: ${fontWeight || 700};
    line-height: ${lineHeight || '26px'};
    margin-bottom: ${marginBottom || '4px'};
  `;
  return <StyledTitle {...props}>{content}</StyledTitle>;
};

export default Title;
