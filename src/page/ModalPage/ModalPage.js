import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../components/Modal/Modal';
import ColorSelectButton from '../../components/ColorSelectButton/ColorSelectButton';

const ModalPage = (props) => {
  const { onClick } = props;
  const cardCompanies = ['포코', '준', '공원', '로이드', '티케', '은현', '유조', '윤호'];

  return (
    <Modal>
      <ul className="flex flex-wrap justify-around h-full">
        {cardCompanies.map((company) => (
          <ColorSelectButton key={company} company={company} onClick={onClick} />
        ))}
      </ul>
    </Modal>
  );
};

export default ModalPage;

ModalPage.propTypes = {
  onClick: PropTypes.func.isRequired,
};
