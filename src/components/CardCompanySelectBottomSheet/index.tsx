import Modal from '../common/Modal';

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
import { uuid } from '../../utils/uuid';

import styles from './cardCompanySelectBottomSheet.module.css';

const CARD_COMPANIES = [
  'BC카드',
  '신한카드',
  '카카오뱅크',
  '현대카드',
  '우리카드',
  '롯데카드',
  '하나카드',
  '국민카드',
] as const;
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

const CardCompanySelectBottomSheet = () => {
  return (
    <Modal>
      <div className={styles.container}>
        <div className={styles.companyContainer}>
          {CARD_COMPANIES.map((cardCompany) => (
            <div key={uuid()} className={styles.company}>
              {CARD_COMPANY_LOGO[cardCompany]}
              <div className="text-card-company">{cardCompany}</div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default CardCompanySelectBottomSheet;
