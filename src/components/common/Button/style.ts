import styled from 'styled-components'

const ButtonWrapper = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme, color = 'MINT' }) => theme.colors[color]};
  cursor: pointer;
`

export { ButtonWrapper }
