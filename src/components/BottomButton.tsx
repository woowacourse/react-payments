import styled from "styled-components"

const ButtonBox = styled.button`
      position: fixed;
    width: 100%;
    height: 10%;
    bottom: 0;
`

interface Props{
  value: string
}
export default function BottomButton({value}: Props){
  return (
    <ButtonBox>{value}</ButtonBox>
  )
}