import * as React from 'react';
import Container from './styles';

interface PropTypes {
  text?: string;
  isDisabled?: boolean;
  align: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
}

function ToolTip({ text, align, isDisabled, children }: PropTypes) {
  return (
    <Container align={align} text={text} isDisabled={isDisabled}>
      <div className="tool-tip-text">{text}</div>
      {children}
    </Container>
  );
}

ToolTip.defaultProps = {
  text: '팁 내용이 비어있습니다.',
  isDisabled: false,
};

export default ToolTip;
