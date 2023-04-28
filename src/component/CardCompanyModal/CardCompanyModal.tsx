import React from "react";
import Modal from "../common/Modal";
import { CREDIT_CARD_COMPANY_LOGO } from "../../data/images";
import St from "./CardCompanyModalStyled";

interface CardCompanyModalProps {
  closeModal: () => void;
}

function CardCompanyModal({ closeModal }: CardCompanyModalProps) {
  return (
    <Modal closeModal={closeModal}>
      <St.CardCompanyModal>
        <St.CardCompanies>
          <St.Input type="radio" id="company1" name="company" />
          <St.Logo htmlFor="company1">
            <St.Img src={CREDIT_CARD_COMPANY_LOGO.BC_CARD} />
            <St.Caption>BC카드</St.Caption>
          </St.Logo>
          <St.Input type="radio" id="company2" name="company" />
          <St.Logo htmlFor="company2">
            <St.Img src={CREDIT_CARD_COMPANY_LOGO.SHINHAN_CARD} />
            <St.Caption>신한카드</St.Caption>
          </St.Logo>
          <St.Input type="radio" id="company3" name="company" />
          <St.Logo htmlFor="company3">
            <St.Img src={CREDIT_CARD_COMPANY_LOGO.KAKAOBANK} />
            <St.Caption>카카오뱅크</St.Caption>
          </St.Logo>
          <St.Input type="radio" id="company4" name="company" />
          <St.Logo htmlFor="company4">
            <St.Img src={CREDIT_CARD_COMPANY_LOGO.HYUNDAI_CARD} />
            <St.Caption>현대카드</St.Caption>
          </St.Logo>
          <St.Input type="radio" id="company5" name="company" />
          <St.Logo htmlFor="company5">
            <St.Img src={CREDIT_CARD_COMPANY_LOGO.WOORI_CARD} />
            <St.Caption>우리카드</St.Caption>
          </St.Logo>
          <St.Input type="radio" id="company6" name="company" />
          <St.Logo htmlFor="company6">
            <St.Img src={CREDIT_CARD_COMPANY_LOGO.LOTTE_CARD} />
            <St.Caption>롯데카드</St.Caption>
          </St.Logo>
          <St.Input type="radio" id="company7" name="company" />
          <St.Logo htmlFor="company7">
            <St.Img src={CREDIT_CARD_COMPANY_LOGO.HANA_CARD} />
            <St.Caption>하나카드</St.Caption>
          </St.Logo>
          <St.Input type="radio" id="company8" name="company" />
          <St.Logo htmlFor="company8">
            <St.Img src={CREDIT_CARD_COMPANY_LOGO.KOOKMIN_CARD} />
            <St.Caption>국민카드</St.Caption>
          </St.Logo>
        </St.CardCompanies>
      </St.CardCompanyModal>
    </Modal>
  );
}

export default CardCompanyModal;
