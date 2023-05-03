import styled from 'styled-components';
import { BcBank, ShinhanBank, KakaoBank, HyundaeBank, WooriBank, LotteBank, HanaBank, KookminBank } from '../assets';
import { BANK_ID, CARD_BANK_COLOR_MAP } from '../constants';
import { CardType } from '../types';
import Bank from './Bank';

interface Props {
  card: CardType;
  setCard: (value: CardType) => void;
}
const ModalBanks = (props: Props) => {
  const card = JSON.parse(JSON.stringify(props.card));
  const cardColorHandler = (e: React.MouseEvent<HTMLElement>) => {
    card.color = CARD_BANK_COLOR_MAP[e.currentTarget.id].background;
    card.bankName = e.currentTarget.id;
    props.setCard(card);
  };
  return (
    <>
      <BanksWrapper>
        <Bank id={BANK_ID.BC_CARD} imgSrc={BcBank} onClick={e => cardColorHandler(e)} />
        <Bank id={BANK_ID.SHINHAN_CARD} imgSrc={ShinhanBank} onClick={e => cardColorHandler(e)} />
        <Bank id={BANK_ID.KAKAO_CARD} imgSrc={KakaoBank} onClick={e => cardColorHandler(e)} />
        <Bank id={BANK_ID.HYUNDAI_CARD} imgSrc={HyundaeBank} onClick={e => cardColorHandler(e)} />
      </BanksWrapper>
      <BanksWrapper>
        <Bank id={BANK_ID.WOORI_CARD} imgSrc={WooriBank} onClick={e => cardColorHandler(e)} />
        <Bank id={BANK_ID.ROTTE_CARD} imgSrc={LotteBank} onClick={e => cardColorHandler(e)} />
        <Bank id={BANK_ID.HANA_CARD} imgSrc={HanaBank} onClick={e => cardColorHandler(e)} />
        <Bank id={BANK_ID.KOOKMIN_CARD} imgSrc={KookminBank} onClick={e => cardColorHandler(e)} />
      </BanksWrapper>
    </>
  );
};

const BanksWrapper = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-evenly;
  align-items: center;
`;

export default ModalBanks;
