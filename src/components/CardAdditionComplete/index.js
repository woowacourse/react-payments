import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button';
import Card from '../../common/Card';
import Input from '../../common/Input';
import { CardAdditionCompleteWrapper } from './index.styles';

const CardAdditionComplete = ({ newCardInfo }) => {
  return (
    <CardAdditionCompleteWrapper>
      <div className='form__column'>카드등록이 완료되었습니다.</div>
      <div className='form__column'>
        <Card cardInfo={newCardInfo} />
      </div>
      <div className='form__column'>
        <Input />
      </div>
      <div className='form__column'>
        <Button>다음</Button>
      </div>
    </CardAdditionCompleteWrapper>
  );
};

CardAdditionComplete.propTypes = {
  newCardInfo: PropTypes.shape({
    cardName: PropTypes.string,
    numbers: PropTypes.shape({
      first: PropTypes.string,
      second: PropTypes.string,
      third: PropTypes.string,
      fourth: PropTypes.string,
    }),
    user: PropTypes.string,
    expireDate: PropTypes.shape({
      month: PropTypes.string,
      year: PropTypes.string,
    }),
    cvc: PropTypes.string,
    password: PropTypes.shape({
      first: PropTypes.string,
      second: PropTypes.string,
    }),
  }),
};

export default CardAdditionComplete;
