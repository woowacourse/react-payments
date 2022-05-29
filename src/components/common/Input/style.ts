import styled from 'styled-components'

interface GrayInputWrapperType {
  error?: boolean
  size?: number
}

const InputBox = styled.input`
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

const GrayInputWrapper = styled.div<GrayInputWrapperType>`
  display: flex;
  align-items: center;
  height: 45px;
  border-radius: 7px;
  box-sizing: border-box;

  background: ${({ theme, error }) =>
    (error && theme.colors.LIGHT_PINK) || theme.colors.LIGHT_GRAY};
  border: ${({ theme, error }) =>
    (error && `solid 2px ${theme.colors.PINK}`) || 'none'};
  width: ${({ size }) => size || 100}%;
`

const BottomBorderInputWrapper = styled.div`
  border-bottom: 1.5px solid black;
  width: 60%;
  margin-top: 25px;
  margin-bottom: 185px;
`

export { InputBox, GrayInputWrapper, BottomBorderInputWrapper }
