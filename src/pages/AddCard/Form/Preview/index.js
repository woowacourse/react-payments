import { Card } from '../../../../components';
import { CARD_COMPANY } from '../../../../constants';

export default function Preview({ userName, cardCompany, serialNumber, expirationDate }) {
  return (
    <div className="card-preview">
      <Card
        userName={userName}
        companyName={CARD_COMPANY[cardCompany]?.NAME}
        color={CARD_COMPANY[cardCompany]?.COLOR}
        number={serialNumber}
        expirationDate={expirationDate}
      />
    </div>
  );
}
