import PropTypes from 'prop-types';
import { CARD_COMPANY } from 'constants';

import Button from 'components/@common/Button';

import Container from './styles';

function CardCompanyList({ onChange, handleModalClose }) {
  const onClickCompanyButton = (event) => {
    handleModalClose();
    onChange(event);
  };

  return (
    <Container>
      {Object.entries(CARD_COMPANY).map(([id, { name, color, icon }]) => (
        <button
          type="button"
          className="card-company-item"
          name="companyId"
          key={id}
          onClick={onClickCompanyButton}
          value={id}
        >
          <div className="icon" data-color={color}>
            {icon}
          </div>
          <div className="name">{name}</div>
        </button>
      ))}

      <Button className="company-modal-close" size="large" onClick={handleModalClose}>
        선택 취소
      </Button>
    </Container>
  );
}

CardCompanyList.defaultProps = {
  handleModalClose: () => {},
};

CardCompanyList.propTypes = {
  onChange: PropTypes.func.isRequired,
  handleModalClose: PropTypes.func,
};

export default CardCompanyList;
