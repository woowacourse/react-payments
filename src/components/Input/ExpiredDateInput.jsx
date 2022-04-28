import Input from ".";
import styled from "styled-components";
import PropTypes from "prop-types";

const ExpiredDateInput = ({
  expiredMonth,
  expiredYear,
  onChangeExpiredMonth,
  onChangeExpiredYear,
}) => {
  return (
    <Container>
      <Input
        size="medium"
        textAlign="right"
        placeholder={"MM"}
        maxLength={2}
        value={expiredMonth}
        onChange={onChangeExpiredMonth}
      />
      <SlashContainer>/</SlashContainer>
      <Input
        size="medium"
        textAlign="left"
        placeholder={"YY"}
        maxLength={2}
        value={expiredYear}
        onChange={onChangeExpiredYear}
      />
    </Container>
  );
};

ExpiredDateInput.propTypes = {
  expiredMonth: PropTypes.string,
  expiredYear: PropTypes.string,
  onChangeExpiredMonth: PropTypes.func,
  onChangeExpiredYear: PropTypes.func,
};

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: #ecebf1;
  border-radius: 7px;
`;

const SlashContainer = styled.span`
  width: 19px;
  height: 27px;
  text-align: center;
  margin: 0 2px;
`;

export default ExpiredDateInput;
