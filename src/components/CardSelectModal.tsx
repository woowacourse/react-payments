import React from 'react';

import { BANK_ICONS } from '../utils/constants';
import './CardSelectModal.css';

const Modal = () => {
  return (
    <>
      <div className="card-select-modal-backdrop"></div>
      <div className="card-select-modal">
        <div className="card-select-line">
          <div className="card-icon">
            <img src={BANK_ICONS['BC']} alt="BC" className="bank-icon" />
            <div>BC카드</div>
          </div>
          <div className="card-icon">
            <img src={BANK_ICONS['shinhan']} alt="shinhan" className="bank-icon" />
            <div>신한카드</div>
          </div>
          <div className="card-icon">
            <img src={BANK_ICONS['kakaobank']} alt="kakaobank" className="bank-icon" />
            <div>카카오뱅크</div>
          </div>
          <div className="card-icon">
            <img src={BANK_ICONS['hyundai']} alt="hyundai" className="bank-icon" />
            <div>현대카드</div>
          </div>
        </div>
        <div className="card-select-line">
          <div className="card-icon">
            <img src={BANK_ICONS['woori']} alt="woori" className="bank-icon" />
            <div>우리카드</div>
          </div>
          <div className="card-icon">
            <img src={BANK_ICONS['lotte']} alt="lotte" className="bank-icon" />
            <div>롯데카드</div>
          </div>
          <div className="card-icon">
            <img src={BANK_ICONS['hana']} alt="hana" className="bank-icon" />
            <div>하나카드</div>
          </div>
          <div className="card-icon">
            <img src={BANK_ICONS['kookmin']} alt="kookmin" className="bank-icon" />
            <div>국민카드</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
