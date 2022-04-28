import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  border-radius: 7px;

  background: ${(props) =>
    props.background ||
    (props.error && props.theme.colors.LIGHT_PINK) ||
    props.theme.colors.LIGHT_GRAY};
  border: ${(props) =>
    props.border ||
    (props.error && `solid 2px ${props.theme.colors.PINK}`) ||
    "none"};
  width: ${(props) => props.size || 100}%;
`;

export { InputWrapper };
