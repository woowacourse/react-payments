import styled from 'styled-components';
import { BANK_ID } from '../constants';

interface Props {
  id: string;
  imgSrc: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const Bank = (props: Props) => {
  return (
    <BankWrapper id={props.id} onClick={props.onClick}>
      <img src={props.imgSrc} alt="도움말" />
      <span style={props.id===BANK_ID.KAKAO_CARD ? { marginLeft: '-5px' } : { marginLeft: '-1px' }}>{props.id}</span>
    </BankWrapper>
  );
};

const BankWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 37px;
  height: 37px;
  font-size: 12px;
  > span {
    margin-top: 10px;
    width: 70px;
    align-items: center;
  }
  > img:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export default Bank;
