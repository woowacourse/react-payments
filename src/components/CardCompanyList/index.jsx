import PropTypes from 'prop-types';
import { CARD_COMPANY } from 'constants';

import Container from './styles';

function CardCompanyList() {
  return (
    <Container>
      {Object.entries(CARD_COMPANY).map(([id, { name, color, icon }]) => (
        <div className="card-company-item" key={id}>
          <div className="icon" data-color={color}>
            {icon}
          </div>
          <div className="name">{name}</div>
        </div>
      ))}
    </Container>
  );
}

CardCompanyList.defaultProps = {};

CardCompanyList.propTypes = {};

export default CardCompanyList;
