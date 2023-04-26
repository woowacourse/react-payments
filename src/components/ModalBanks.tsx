import styled from 'styled-components';
import { BcBank, ShinhanBank, KakaoBank, HyundaeBank, WooriBank, LotteBank, HanaBank, KookminBank } from '../assets';
import { CARD_BANK_COLOR_MAP } from '../constants';
import { CardType } from '../types';

interface Props {
  card: CardType;
  setCard: (value: CardType) => void;
}
const ModalBanks = (props: Props) => {
    const card = JSON.parse(JSON.stringify(props.card));

    const cardColorHandler = (e:React.MouseEvent<HTMLElement>)=>{
        card.color=CARD_BANK_COLOR_MAP[e.currentTarget.id].background;
        
        props.setCard(card);
    }
  return (
    <ModalContainer>
      <BanksWrapper>
        <BankWrapper id="BC카드" onClick={cardColorHandler}>
          <img src={BcBank} alt="도움말"/>
          <span>BC카드</span>
        </BankWrapper>
        <BankWrapper id="신한카드" onClick={cardColorHandler}>
          <img src={ShinhanBank} alt="도움말" />
          <span>신한카드</span>
        </BankWrapper>
        <BankWrapper id="카카오뱅크" onClick={cardColorHandler}>
          <img src={KakaoBank} alt="도움말" />
          <span style={{marginLeft:"-6px"}}>카카오뱅크</span>
        </BankWrapper>
        <BankWrapper id="현대카드" onClick={cardColorHandler}>
          <img src={HyundaeBank} alt="도움말" />
          <span>현대카드</span>
        </BankWrapper>
      </BanksWrapper>
      <BanksWrapper>
        <BankWrapper id="우리카드" onClick={cardColorHandler}>
          <img src={WooriBank} alt="도움말" />
          <span>우리카드</span>
        </BankWrapper>
        <BankWrapper id="롯데카드" onClick={cardColorHandler}>
          <img src={LotteBank} alt="도움말" />
          <span>롯데카드</span>
        </BankWrapper>
        <BankWrapper id="하나카드" onClick={cardColorHandler}>
          <img src={HanaBank} alt="도움말" />
          <span>하나카드</span>
        </BankWrapper>
        <BankWrapper id="국민카드" onClick={cardColorHandler}>
          <img src={KookminBank} alt="도움말" />
          <span>국민카드</span>
        </BankWrapper>
      </BanksWrapper>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 95%;
  padding: 32px 16px;

  display: flex;
  flex-direction: column;

  border-radius: 8px 8px 0px 0px;
  background: #ffffff;

  overflow: scroll;
`;

const BanksWrapper = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-evenly;
  align-items: center;
`;

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
`;

export default ModalBanks;
