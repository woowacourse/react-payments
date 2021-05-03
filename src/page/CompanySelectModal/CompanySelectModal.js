import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../components/Modal/Modal';
import ColorSelectButton from '../../components/ColorSelectButton/ColorSelectButton';

const CompanySelectModal = (props) => {
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

export default CompanySelectModal;

CompanySelectModal.propTypes = {
  onClick: PropTypes.func,
};
