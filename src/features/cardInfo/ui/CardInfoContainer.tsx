import './cardInfoContainer.css';
import CardInfoSection from './CardInfoSection';
import { cardInfoSectionConfig } from '../config/cardInfoSectionConfig';
import { InputValidationResultProps } from '../../../entities/cardInfo/model/cardInfoValidator';

export default function CardInfoContainer({
  onChange,
  error,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: InputValidationResultProps;
}) {
  return (
    <div className="card-info-container">
      {cardInfoSectionConfig.map((data, index) => (
        <CardInfoSection key={index} {...data} onChange={onChange} error={error} />
      ))}
    </div>
  );
}
