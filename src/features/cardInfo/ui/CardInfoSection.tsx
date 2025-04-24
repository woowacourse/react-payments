import './cardInfoSection.css';
import CardInfoInput from '../../../shared/ui/CardInfoInput';
import { ComponentProps } from 'react';
import { InputValidationResultProps } from '../../../entities/cardInfo/model/cardInfoValidator';

interface CardInfoSectionProps {
  id: string;
  title: string;
  description: string;
  subTitle: string;
  inputArr: ComponentProps<typeof CardInfoInput>[];
  maxLength: number;
  error?: InputValidationResultProps;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CardInfoSection({
  id,
  title,
  description,
  subTitle,
  inputArr,
  maxLength,
  error = {} as InputValidationResultProps,
  onChange,
}: CardInfoSectionProps) {
  const errorKey = `${id}Error`;

  return (
    <section className="card-info-section">
      <div>
        <h1 className="card-info-title">{title}</h1>
        <span className="card-info-description">{description}</span>
      </div>
      <div className="card-info-sub-section">
        <span className="card-info-subtitle">{subTitle}</span>
        <div className="card-info-input-container">
          {inputArr.map((input, index) => (
            <CardInfoInput
              key={index}
              {...input}
              onChange={onChange}
              maxLength={maxLength}
              error={error && errorKey in error && error[errorKey][0] === index}
            />
          ))}
        </div>
        <span className="card-info-error">
          {error && errorKey in error ? error[errorKey][1] : ''}
        </span>
      </div>
    </section>
  );
}
