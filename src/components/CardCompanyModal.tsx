import Modal from './Modal';

import bcLogo from '../assets/bc-logo.svg';
import hanaLogo from '../assets/hana-logo.svg';
import hyundaiLogo from '../assets/hyundai-logo.svg';
import kakaoLogo from '../assets/kakao-logo.svg';
import kbLogo from '../assets/kb-logo.svg';
import lotteLogo from '../assets/lotte-logo.svg';
import shinhanLogo from '../assets/shinhan-logo.svg';
import wooriLogo from '../assets/woori-logo.svg';
import styled from 'styled-components';

const cardCompanies = [
  {
    name: 'BC카드',
    logo: bcLogo,
  },
  {
    name: '신한카드',
    logo: shinhanLogo,
  },
  {
    name: '카카오뱅크',
    logo: kakaoLogo,
  },
  {
    name: '현대카드',
    logo: hyundaiLogo,
  },
  {
    name: '우리카드',
    logo: wooriLogo,
  },
  {
    name: '롯데카드',
    logo: lotteLogo,
  },
  {
    name: '하나카드',
    logo: hanaLogo,
  },
  {
    name: '국민카드',
    logo: kbLogo,
  },
];

type CardCompanyModalProps = {
  isModalOpen: boolean;
  closeModal: () => void;
  onClickLogo: (cardCompanyName: string) => void;
};

const CardCompanyModal = ({ onClickLogo, isModalOpen, closeModal }: CardCompanyModalProps) => {
  const handleClickLogo = (companyName: string) => {
    onClickLogo(companyName);
    closeModal();
  };

  return (
    <>
      {isModalOpen && (
        <Modal onCloseModal={closeModal}>
          <CardCompanyWrapper>
            {cardCompanies.map((company, index) => (
              <CardCompanyButton
                type="button"
                key={index}
                onClick={() => handleClickLogo(company.name)}
              >
                <img src={company.logo} alt={company.name} />
                <CardCompanyName>{company.name}</CardCompanyName>
              </CardCompanyButton>
            ))}
          </CardCompanyWrapper>
        </Modal>
      )}
    </>
  );
};

const CardCompanyWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 55px);
  grid-column-gap: 36px;
  grid-row-gap: 26px;
`;

const CardCompanyButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  row-gap: 10px;
`;

const CardCompanyName = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.085em;

  color: #525252;
`;

export default CardCompanyModal;
