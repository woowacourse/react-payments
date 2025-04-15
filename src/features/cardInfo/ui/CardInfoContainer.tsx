import './CardInfoContainer.css';
import CardInfoSection from './CardInfoSection';
import { cardInfoSectionData } from '../data/cardInfoSectionData';

export default function CardInfoContainer() {
  return (
    <div className='card-info-container'>
      {cardInfoSectionData.map((data) => (
        <CardInfoSection {...data} />
      ))}
    </div>
  );
}
