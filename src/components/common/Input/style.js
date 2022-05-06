import styled from 'styled-components'

const InputWrapper = styled.input`
  background-color: transparent;
  border: none;
  text-align: center;
  width: 100%;
  padding: 5px;
  color: ${(props) => props.color || props.theme.colors.MINT};
  font-size: 18px;
  font-weight: 500px;

  :focus {
    outline: none;
  }

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const GrayInputWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  border-radius: 7px;
  box-sizing: border-box;

  background: ${(props) =>
    props.background ||
    (props.error && props.theme.colors.LIGHT_PINK) ||
    props.theme.colors.LIGHT_GRAY};
  border: ${(props) =>
    props.border ||
    (props.error && `solid 2px ${props.theme.colors.PINK}`) ||
    'none'};
  width: ${(props) => props.size || 100}%;
`

const BottomBorderInputWrapper = styled.div`
  border-bottom: 1.5px solid black;
  width: 60%;
  margin: 25px;
`

export { InputWrapper, GrayInputWrapper, BottomBorderInputWrapper }
