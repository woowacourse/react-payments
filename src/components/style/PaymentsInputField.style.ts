import styled from 'styled-components';
import STYLE from '../../constants/style';

const Input = styled.input<{ hasError?: boolean; width?: number }>`
  font-family: ${STYLE.FONT_FAMILY_INTER};
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  padding: 8px;
  border-radius: 2px;
  border: ${(props) =>
    props.hasError
      ? `solid 1px ${STYLE.COLOR.red}`
      : `solid 1px ${STYLE.COLOR.gray170}`};

  &:focus {
    outline: none;
    border: ${(props) =>
      props.hasError
        ? `solid 1px ${STYLE.COLOR.red}`
        : `solid 1px ${STYLE.COLOR.black}`};
  }

  &::placeholder {
    color: ${STYLE.COLOR.gray170};
  }
`;

export default Input;
