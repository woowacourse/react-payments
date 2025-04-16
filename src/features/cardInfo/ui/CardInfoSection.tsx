import './cardInfoSection.css';
import CustomInput from '../../../shared/ui/CustomInput';
import { CustomInputProps } from '../../../shared/type/types';

interface CardInfoSectionProps {
  title: string;
  description: string;
  subTitle: string;
  inputArr: CustomInputProps[];
  errorMessage?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CardInfoSection({
  title,
  description,
  subTitle,
  inputArr,
  errorMessage = '',
  onChange,
}: CardInfoSectionProps) {
  return (
    <section className='card-info-section'>
      <div>
        <h1 className='card-info-title'>{title}</h1>
        <span className='card-info-description'>{description}</span>
      </div>
      <div className='card-info-sub-section'>
        <span className='card-info-subtitle'>{subTitle}</span>
        <div className='card-info-input-container'>
          {inputArr.map((input, index) => (
            <CustomInput key={index} {...input} onChange={onChange} />
          ))}
        </div>
        <span className='error-message'>{errorMessage}</span>
      </div>
    </section>
  );
}
