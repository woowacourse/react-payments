import Input from ".";
import styled from "styled-components";
import PropTypes from "prop-types";

const CardNumberInput = ({
  onChangeFirstCardNumber,
  onChangeSecondCardNumber,
  onChangeThirdCardNumber,
  onChangeFourthCardNumber,
  firstCardNumber,
  secondCardNumber,
  thirdCardNumber,
  fourthCardNumber,
}) => {
  return (
    <Container>
      <Input
        size="medium"
        textAlign="right"
        value={firstCardNumber}
        onChange={onChangeFirstCardNumber}
        maxLength={4}
      />
      <DashContainer>-</DashContainer>
      <Input
        size="medium"
        value={secondCardNumber}
        onChange={onChangeSecondCardNumber}
        maxLength={4}
      />
      <DashContainer>-</DashContainer>
      <Input
        size="medium"
        type="password"
        value={thirdCardNumber}
        onChange={onChangeThirdCardNumber}
        maxLength={4}
      />
      <DashContainer>-</DashContainer>
      <Input
        size="medium"
        textAlign="left"
        type="password"
        value={fourthCardNumber}
        onChange={onChangeFourthCardNumber}
        maxLength={4}
      />
    </Container>
  );
};

CardNumberInput.propTypes = {
  onChangeFirstCardNumber: PropTypes.func,
  onChangeSecondCardNumber: PropTypes.func,
  onChangeThirdCardNumber: PropTypes.func,
  onChangeFourthCardNumber: PropTypes.func,
  firstCardNumber: PropTypes.string,
  secondCardNumber: PropTypes.string,
  thirdCardNumber: PropTypes.string,
  fourthCardNumber: PropTypes.string,
};

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: #ecebf1;
  border-radius: 7px;
`;

const DashContainer = styled.span`
  width: 10px;
  height: 45px;
  margin: 0 10px;
  color: #111;
`;

export default CardNumberInput;
