import Modal from './Modal';

import bcCard from '../assets/company-bc.png';
import hanaCard from '../assets/company-hana.png';
import hyundaiCard from '../assets/company-hyundai.png';
import kakaoCard from '../assets/company-kakao.png';
import kbCard from '../assets/company-kb.png';
import lotteCard from '../assets/company-lotte.png';
import shinhanCard from '../assets/company-shinhan.png';
import wooriCard from '../assets/company-woori.png';
import useModal from '../hooks/useModal';
import styled from 'styled-components';

const cardCompanies = [
  {
    name: 'BC카드',
    imageSrc: bcCard,
  },
  {
    name: '신한카드',
    imageSrc: shinhanCard,
  },

  {
    name: '카카오뱅크',
    imageSrc: kakaoCard,
  },
  {
    name: '현대카드',
    imageSrc: hyundaiCard,
  },
  {
    name: '우리카드',
    imageSrc: wooriCard,
  },
  {
    name: '롯데카드',
    imageSrc: lotteCard,
  },
  {
    name: '하나카드',
    imageSrc: hanaCard,
  },
  {
    name: '국민카드',
    imageSrc: kbCard,
  },
];

type CardCompanyModalProps = {
  onClickLogo: (cardCompanyName: string) => void;
};

const CardCompanyModal = ({ onClickLogo }: CardCompanyModalProps) => {
  const { isModalOpen, closeModal } = useModal(true);

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
                <img src={company.imageSrc} alt={company.name} />
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
