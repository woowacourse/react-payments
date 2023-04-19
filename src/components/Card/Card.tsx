import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 212px;
  height: 132px;
  padding: 12px;
  background: #333333;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-size: 14px;
`;

const ChipWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
`;

const Chip = styled.div`
  width: 40px;
  height: 26px;
  background: #cbba64;
  border-radius: 4px;
`;

const CardText = styled.span`
  display: inline-block;
  color: #ffffff;
  margin: 8px 8px 0 0;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface RefType {
  [key: number]: React.RefObject<HTMLInputElement>;
}

interface CardProps {
  cardNumbers: any;
  cardExpiredDateRefs: RefType;
  cardOwnerNameRef: React.RefObject<HTMLInputElement>;
}

const Card = ({
  cardNumbers,
  cardExpiredDateRefs,
  cardOwnerNameRef,
}: CardProps) => {
  //const [first, second, third, fourth] = cardNumbers;
  return (
    <>
      <Wrapper>
        <ChipWrapper>
          <Chip />
          <TextWrapper>
            <CardText>{cardNumbers[0]}</CardText>
            <CardText>{cardNumbers[1]}</CardText>
            <CardText>{cardNumbers[2]}</CardText>
            <CardText>{cardNumbers[3]}</CardText>
          </TextWrapper>
          <TextWrapper>
            <CardText>SUN</CardText>
            <CardText>04/23</CardText>
          </TextWrapper>
        </ChipWrapper>
      </Wrapper>
    </>
  );
};

export default Card;
