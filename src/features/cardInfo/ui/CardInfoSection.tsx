import './cardInfoSection.css';
import CardInfoInput from '../../../shared/ui/CardInfoInput';
import CardInfoSelect from '../../../shared/ui/CardInfoSelect';
import { ComponentProps } from 'react';
import { InputValidationResultProps } from '../../../entities/cardInfo/model/cardInfoValidator';
import { InputType } from '../config/cardInfoSectionConfig';

type InputConfigProps = (
  | ComponentProps<typeof CardInfoInput>
  | ComponentProps<typeof CardInfoSelect>
) & {
  type: string;
  options?: string[];
};

interface CardInfoSectionProps {
  id: string;
  title: string;
  description: string;
  subTitle: string;
  inputArr: InputConfigProps[];
  maxLength: number;
  error?: InputValidationResultProps;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  inputType: InputType;
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
  inputType,
}: CardInfoSectionProps) {
  const errorKey = `${id}Error`;

  return (
    <section className="card-info-section">
      <div>
        <h1 className="card-info-title">{title}</h1>
        <span className="card-info-description">{description}</span>
      </div>
      <div className="card-info-sub-section">
        {inputType !== InputType.SELECT && <span className="card-info-subtitle">{subTitle}</span>}
        <div className="card-info-input-container">
          {inputArr.map((input, index) => {
            const hasError = error && errorKey in error && error[errorKey][0] === index;

            if (inputType === InputType.SELECT) {
              return (
                <CardInfoSelect
                  key={index}
                  placeholder={input.placeholder}
                  name={input.name}
                  onChange={onChange as any}
                  error={hasError}
                  options={input.options || []}
                />
              );
            }

            return (
              <CardInfoInput
                key={index}
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                onChange={onChange as any}
                maxLength={maxLength}
                error={hasError}
              />
            );
          })}
        </div>
        <span className="card-info-error">
          {error && errorKey in error ? error[errorKey][1] : ''}
        </span>
      </div>
    </section>
  );
}
