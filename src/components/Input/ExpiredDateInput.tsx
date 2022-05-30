import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/Input/index';

const ExpiredDateWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: #ecebf1;
  border-radius: 7px;
`;

const Slash = styled.span`
  width: 19px;
  height: 27px;
  text-align: center;
  margin: 0 2px;
`;

type ExpiredDateInputProps = {
  expiredMonth: string;
  expiredYear: string;
  onChangeExpiredMonth: Function;
  onChangeExpiredYear: Function;
};

const ExpiredDateInput = ({
  expiredMonth,
  expiredYear,
  onChangeExpiredMonth,
  onChangeExpiredYear,
}: ExpiredDateInputProps) => {
  return (
    <ExpiredDateWrapper>
      <Input
        scale="medium"
        textAlign="right"
        placeholder={'MM'}
        maxLength={2}
        value={expiredMonth}
        onChange={onChangeExpiredMonth}
      />
      <Slash>/</Slash>
      <Input
        scale="medium"
        textAlign="left"
        placeholder={'YY'}
        maxLength={2}
        value={expiredYear}
        onChange={onChangeExpiredYear}
      />
    </ExpiredDateWrapper>
  );
};

ExpiredDateInput.propTypes = {
  expiredMonth: PropTypes.string,
  expiredYear: PropTypes.string,
  onChangeExpiredMonth: PropTypes.func,
  onChangeExpiredYear: PropTypes.func,
};

export default ExpiredDateInput;
