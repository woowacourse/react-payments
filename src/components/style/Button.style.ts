import styled from 'styled-components';
import STYLE from '../../constants/style';

const ButtonStyle = styled.button<{ floating?: boolean; width?: number }>`
  font-weight: ${STYLE.BOLD.title};
  font-size: ${STYLE.FONT_SIZE.middle};
  background-color: ${STYLE.COLOR.black50};
  color: ${STYLE.COLOR.white24};
  border: none;
  padding: 18px 0;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  border-radius: ${(props) => (!props.floating ? '5px' : '0')};
  cursor: pointer;
  ${(props) =>
    props.floating
      ? `   z-index: 1;
    position: fixed;
    bottom: 0;
    max-width:375px;`
      : ''};
`;

export default ButtonStyle;
