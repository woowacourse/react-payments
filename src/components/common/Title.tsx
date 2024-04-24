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
  return (
    <StyledTitle
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      marginBottom={marginBottom}
      {...props}
    >
      {content}
    </StyledTitle>
  );
};

const StyledTitle = styled.h1<{
  color: CSSProperties['color'];
  fontSize: CSSProperties['fontSize'];
  fontWeight: CSSProperties['fontWeight'];
  lineHeight: CSSProperties['lineHeight'];
  marginBottom: CSSProperties['marginBottom'];
}>`
  color: ${(props) => props.color || '#000000'};
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: ${(props) => props.fontWeight || 700};
  line-height: ${(props) => props.lineHeight || '26px'};
  margin-bottom: ${(props) => props.marginBottom || '4px'};
`;

export default Title;
