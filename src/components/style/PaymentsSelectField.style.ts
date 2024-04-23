import styled from 'styled-components';
import STYLE from '../../constants/style';

const Select = styled.select`
  font-family: ${STYLE.FONT_FAMILY_INTER};
  width: 100%;
  padding: 8px;
  border-radius: 2px;
  border: solid 1px ${STYLE.COLOR.gray170};

  &:focus {
    outline: none;
    border: solid 1px ${STYLE.COLOR.black};
  }

  &:required:invalid {
    color: ${STYLE.COLOR.gray170};
  }

  option[value=''][disabled] {
    display: none;
  }
`;

export default Select;
