import styled from 'styled-components';

import PropTypes from 'prop-types';

const getButtonSizeTemplate = size => {
  switch (size) {
    case 'small':
      return { height: '25px', fontSize: '14px' };
    case 'medium':
      return { height: '45px', fontSize: '17px' };
    case 'large':
      return { height: '65px', fontSize: '20px' };
  }
};

export default function Button({
  bgColor = 'white',
  border = '0px',
  color = 'black',
  content,
  fontWeight = 'normal',
  shape = 'rectangle',
  size = 'medium',
  onClickFunc,
}) {
  const buttonStyle = getButtonSizeTemplate(size);
  const Button = styled.button`
    background: ${bgColor};
    border: ${border};
    border-radius: ${shape === 'circle' && '50%'};
    color: ${color};
    font-size: ${buttonStyle.fontSize};
    font-weight: ${fontWeight};
    height: ${buttonStyle.height};
    width: ${shape === 'circle' && buttonStyle.height};
  `;

  return <Button onClick={onClickFunc}>{content}</Button>;
}

Button.propTypes = {
  bgColor: PropTypes.string,
  border: PropTypes.string,
  color: PropTypes.string,
  content: PropTypes.node,
  fontWeight: PropTypes.string,
  shape: PropTypes.string,
  size: PropTypes.object,
  onClickFunc: PropTypes.func,
};
