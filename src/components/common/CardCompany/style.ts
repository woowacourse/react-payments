import styled from 'styled-components'

const CompanyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const CompanyCircle = styled.div`
  background-color: ${(props) => props.color};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  &:hover {
    background-color: ${(props) => `${props.color}cc`};
  }
`
const CompanyName = styled.p`
  margin: 0;
  padding: 8px;
`

export { CompanyWrapper, CompanyCircle, CompanyName }
