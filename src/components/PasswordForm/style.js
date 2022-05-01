import styled from 'styled-components'

const PasswordWrapper = styled.div`
  display: flex;
  gap: 8px;
`

const Dot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  color: ${({ theme }) => theme.colors.MINT};
  font-size: 18px;
  font-weight: 500;
`

export { PasswordWrapper, Dot }
