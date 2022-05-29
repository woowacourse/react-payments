import * as React from 'react';
import Container from './styles';

interface PropTypes {
  onClickPreviousButton?: React.MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
}

function Header({ onClickPreviousButton, children }: PropTypes) {
  return (
    <Container>
      {onClickPreviousButton && (
        <div className="previous-button" onClick={onClickPreviousButton}>
          &lt;
        </div>
      )}
      <div className="title">{children}</div>
    </Container>
  );
}

Header.defaultProps = {
  onClickPreviousButton: null,
};

export default Header;
