import Input from '../index';
import PropTypes from 'prop-types';
import * as Styled from './index.styled';

const ExpiredDateInput = ({
  expiredMonth,
  expiredYear,
  onChangeExpiredMonth,
  onChangeExpiredYear,
}) => {
  return (
    <Styled.Container>
      <Input
        scale="medium"
        placeholder={'MM'}
        maxLength={2}
        value={expiredMonth}
        onChange={onChangeExpiredMonth}
        data-testid="expired-month-input"
      />
      <Styled.SlashContainer>/</Styled.SlashContainer>
      <Input
        scale="medium"
        placeholder={'YY'}
        maxLength={2}
        value={expiredYear}
        onChange={onChangeExpiredYear}
        data-testid="expired-year-input"
      />
    </Styled.Container>
  );
};

ExpiredDateInput.propTypes = {
  expiredMonth: PropTypes.string,
  expiredYear: PropTypes.string,
  onChangeExpiredMonth: PropTypes.func,
  onChangeExpiredYear: PropTypes.func,
};

export default ExpiredDateInput;
