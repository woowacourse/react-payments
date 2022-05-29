import styled from 'styled-components'

const Label = styled.div`
  display: flex;
  justify-content: space-between;

  & div {
    font-size: 12px;
    margin-bottom: 10px;
    display: inline-block;
    color: ${({ theme }) => theme.colors.DARK_GRAY};
  }
`

const HelpTextWrapper = styled.div`
  font-size: 12px;
`

const FieldWrapper = styled.div`
  margin-bottom: 15px;

  & label {
    font-size: 12px;
    margin-bottom: 10px;
    display: inline-block;
    color: ${({ theme }) => theme.colors.DARK_GRAY};
  }
`

const InputHelperWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

export { Label, HelpTextWrapper, FieldWrapper, InputHelperWrapper }
