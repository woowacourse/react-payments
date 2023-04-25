import {
  BCCardLogo,
  HanaCardLogo,
  HyundaiCardLogo,
  KBCardLogo,
  KakaobankCardLogo,
  LotteCardLogo,
  ShinhanCardLogo,
  WooriCardLogo,
} from '../../assets/svg';

import { useModal } from '../common/Modal/ModalContext';
import { useCardCompany } from '../../domain/context/CardCompanyContext';
import type { CardCompany } from '../../domain/types/card';

import styles from './cardCompanyButton.module.css';

const CARD_COMPANY_LOGO = {
  BC카드: <BCCardLogo />,
  신한카드: <ShinhanCardLogo />,
  카카오뱅크: <KakaobankCardLogo />,
  현대카드: <HyundaiCardLogo />,
  우리카드: <WooriCardLogo />,
  롯데카드: <LotteCardLogo />,
  하나카드: <HanaCardLogo />,
  국민카드: <KBCardLogo />,
} as const;

interface Props {
  cardCompany: CardCompany;
}

const CardCompanyButton = ({ cardCompany }: Props) => {
  const { setCardCompany } = useCardCompany();
  const { closeModal } = useModal();

  const handleClick = () => {
    setCardCompany(cardCompany);
    closeModal();
  };

  return (
    <button type="button" className={styles.container} onClick={handleClick}>
      {CARD_COMPANY_LOGO[cardCompany]}
      <div className="text-card-company">{cardCompany}</div>
    </button>
  );
};

export default CardCompanyButton;
