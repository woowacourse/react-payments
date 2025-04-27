import './cardInfoContainer.css';
import CardInfoSection from './CardInfoSection';
import { cardInfoSectionConfig } from '../config/cardInfoSectionConfig';
import { InputValidationResultProps } from '../../../entities/cardInfo/model/cardInfoValidator';
import { CardInfoType } from '../../../entities/cardInfo/constants/cardInfoTypeConstants';

export default function CardInfoContainer({
  onChange,
  error,
  currentSection,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  error?: InputValidationResultProps;
  currentSection: CardInfoType;
}) {
  const activeSectionConfigs = cardInfoSectionConfig.slice(
    0,
    cardInfoSectionConfig.findIndex((config) => config.id === currentSection) + 1,
  );

  return (
    <div className="card-info-container">
      {activeSectionConfigs.reverse().map((config) => (
        <CardInfoSection key={config.id} {...config} onChange={onChange} error={error} />
      ))}
    </div>
  );
}
