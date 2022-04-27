import styled from 'styled-components';

import PropTypes from 'prop-types';

const getCardSize = size => {
  switch (size) {
    case 'medium':
      return {
        card: {
          height: '133px',
          width: '213px',
        },
        title: {
          marginBottom: '33px',
          size: '10px',
        },
        magnet: {
          height: '26px',
          marginBottom: '15px',
          width: '40px',
        },
        numberSet: {
          marginBottom: '12px',
        },
        detail: {
          size: '20px',
        },
      };
    case 'large':
      return;
  }
};

export default function Card({
  bgColor,
  className,
  name,
  number,
  size,
  title,
  validDate,
}) {
  const cardStyle = getCardSize(size);
  const StyledCard = styled.div`
    background: ${bgColor};
    box-shadow: 3px 3px 5px #00000040;
    border-radius: 5px;
    height: ${cardStyle.card.height};
    width: ${cardStyle.card.width};
    padding: 19px;
  `;
  const Title = styled.div`
    color: #383838;
    font-size: ${cardStyle.title.size};
    height: ${cardStyle.title.size};
    margin-bottom: ${cardStyle.title.marginBottom};
  `;
  const Magnet = styled.div`
    background: #cbba64;
    border-radius: 4px;
    height: ${cardStyle.magnet.height};
    margin-bottom: ${cardStyle.magnet.marginBottom};
    width: ${cardStyle.magnet.width};
  `;
  const NumberSet = styled.div`
    color: #525252;
    font-weight: bold;
    font-size: ${cardStyle.detail.size};
    height: ${cardStyle.detail.size};
    margin-bottom: ${cardStyle.numberSet.marginBottom};
    text-align: center;
  `;
  const OwnerName = styled.span`
    color: #525252;
    font-weight: bold;
    font-size: ${cardStyle.detail.size};
    height: ${cardStyle.detail.size};
  `;
  const ValidDate = styled.span`
    color: #525252;
    float: right;
    font-weight: bold;
    font-size: ${cardStyle.detail.size};
    height: ${cardStyle.detail.size};
  `;

  return (
    <StyledCard className={className}>
      <Title>{title}</Title>
      <Magnet />
      <div>
        <NumberSet>{number}</NumberSet>
        <OwnerName>{name}</OwnerName>
        <ValidDate>{validDate}</ValidDate>
      </div>
    </StyledCard>
  );
}

Card.defaultProps = {
  name: 'NAME',
  size: 'medium',
  validDate: 'MM/YY',
};

Card.propTypes = {
  bgColor: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
  validDate: PropTypes.string,
};
