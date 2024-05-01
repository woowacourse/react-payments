import styled from "styled-components";
import { CardNumberKeys } from "../../../types/card";
import { decideCardLogo } from "../CardPreview.utils";

interface CardHeaderProps {
  value: Record<CardNumberKeys, string>;
}

const CardHeader = ({ value }: CardHeaderProps) => {
  const cardLogo = decideCardLogo(value);

  return (
    <StyledCardHeader>
      <CardChip />
      {cardLogo && <CardLogo src={cardLogo} />}
    </StyledCardHeader>
  );
};

export default CardHeader;

const StyledCardHeader = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 8px 12px;
`;

const CardChip = styled.div`
  height: 22px;
  width: 36px;

  border-radius: 4px;
  background-color: #ddcd78;
`;

const CardLogo = styled.img`
  height: 22px;
  width: 36px;
`;
