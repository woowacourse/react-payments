import styled from "styled-components";
import CardNumberText from "./CardNumberText.component";

const CardTop = styled.div`
  width: 100%;
  height: 100%;
  font-size: 10px;
  margin-left: 30px;
  display: flex;
  align-items: center;
`;

const CardMiddle = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 30px;
  margin-bottom: 5px;
  transform: translate(0, 5px);
  display: flex;
  align-items: center;
`;

const SmallCardChip = styled.div`
  width: 40px;
  height: 26px;
  left: 95px;
  top: 122px;

  background: ${({ theme }) => theme.colors.cardChip};
  border-radius: 4px;
`;

const CardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 208px;
  height: 130px;

  font-size: 30px;
  color: ${({ theme }) => theme.colors.cardText};

  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  user-select: none;

  background: ${({ theme, cardType }) =>
    theme.colors[cardType] || theme.colors.defaultCard};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  cursor: pointer;
`;

const CardBottom = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardBottomInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  transform: translate(0, -7px);
  align-items: center;
  justify-content: space-between;
`;

const CardText = styled.span`
  margin: 0 16px;

  font-size: 12px;
  line-height: 16px;
  vertical-align: middle;
  font-weight: 400;
`;

const Card = ({
  name,
  month,
  year,
  cardNumbers,
  cardTypeInfo,
  toggleModal,
}) => {
  return (
    <CardContainer onClick={toggleModal} data-testid="card">
      <CardBox cardType={cardTypeInfo.cardType}>
        <CardTop>{cardTypeInfo.cardName}</CardTop>
        <CardMiddle>
          <SmallCardChip />
        </CardMiddle>
        <CardBottom>
          <CardNumberText cardNumbers={cardNumbers} />
          <CardBottomInfo>
            <CardText>{name}</CardText>
            <CardText>
              {month} / {year}
            </CardText>
          </CardBottomInfo>
        </CardBottom>
      </CardBox>
    </CardContainer>
  );
};

export default Card;
