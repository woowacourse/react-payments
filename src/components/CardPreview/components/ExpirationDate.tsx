import { ExpirationDateKeys } from "../../../types/card";

import CardText from "./CardText";

const DATE_DELIMITER = "/";

interface ExpirationDateProps {
  value: Record<ExpirationDateKeys, string>;
}

const ExpirationDate = ({ value }: ExpirationDateProps) => {
  const { mm, yy } = value;

  const formattingDate = (month: string, year: string) => {
    return year.length === 0 ? month : `${month + DATE_DELIMITER + year}`;
  };

  return <CardText type="text" text={formattingDate(mm, yy)} />;
};

export default ExpirationDate;
