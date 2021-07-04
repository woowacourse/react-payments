import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import ColorSelectButton from '../../components/ColorSelectButton/ColorSelectButton';
import Modal from '../../components/Modal/Modal';
import { PaymentsContext } from '../../contexts/PaymentsContextProvider';

const ModalPage = (props) => {
  const { handleModalClosed } = props;
  const { cardCompany } = useContext(PaymentsContext);

  const cardCompanies = ['포코', '준', '공원', '로이드', '티케', '은현', '유조', '윤호'];

  const handleChangeCardCompany = (e) => {
    cardCompany.handleChange(e);
    handleModalClosed();
  };

  return (
    <Modal>
      <ul className="flex flex-wrap justify-around h-full">
        {cardCompanies.map((company) => (
          <ColorSelectButton key={company} company={company} onClick={handleChangeCardCompany} />
        ))}
      </ul>
    </Modal>
  );
};

export default ModalPage;

ModalPage.propTypes = {
  setPageRouter: PropTypes.func.isRequired,
};
