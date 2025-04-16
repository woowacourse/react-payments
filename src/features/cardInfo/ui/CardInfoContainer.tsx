import './cardInfoContainer.css';
import CardInfoSection from './CardInfoSection';
import { cardInfoSectionData } from '../data/cardInfoSectionData';
import { ErrorProps } from '../../../shared/type/types';

export default function CardInfoContainer({
  onChange,
  error,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: ErrorProps;
}) {
  return (
    <div className="card-info-container">
      {cardInfoSectionData.map((data, index) => (
        <CardInfoSection key={`data.title-${index}`} {...data} onChange={onChange} error={error} />
      ))}
    </div>
  );
}
