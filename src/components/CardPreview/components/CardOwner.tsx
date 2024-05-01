import { CardOwnerKeys } from "../../../types/card";

import CardText from "./CardText";

interface CardOwnerPros {
  value: Record<CardOwnerKeys, string>;
}

const CardOwner = ({ value }: CardOwnerPros) => {
  const { ownerName } = value;

  return <CardText type="longText" text={ownerName} />;
};

export default CardOwner;
