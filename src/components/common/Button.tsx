import styled from 'styled-components';

interface Props {
    text: string;
    onClick: ()=>void
}

const Button = (props:Props)=>{
    return <ButtonWrapper onClick={props.onClick}>{props.text}</ButtonWrapper>
}

const ButtonWrapper = styled.button`
  width: 70px;
  height: 30px;

  margin-top: -8px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: 0.1px solid rgba(214, 214, 214, 0.5);

  font-size: 10px;

  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  color: #534747;
  
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export default Button