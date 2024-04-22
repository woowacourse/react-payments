import CardText from "./CardText";

const DATE_DELIMITER = "/";

interface ExpirationDateDisplayProps {
  expirationDate: string[];
}

const ExpirationDateDisplay = ({
  expirationDate,
}: ExpirationDateDisplayProps) => {
  const [month, year] = expirationDate;

  const formattingDate = (month: string, year: string) => {
    return year.length === 0 ? month : `${month + DATE_DELIMITER + year}`;
  };

  return <CardText type="text" text={formattingDate(month, year)} />;
};

export default ExpirationDateDisplay;
