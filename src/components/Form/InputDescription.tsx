import styled from "styled-components";

export interface InputDescriptionProps {
  title: string;
  description?: string;
}

const InputDescription = ({ title, description }: InputDescriptionProps) => {
  return (
    <div>
      <InputDescriptionTitle>{title}</InputDescriptionTitle>
      <InputDescriptionText>{description}</InputDescriptionText>
    </div>
  );
};

const InputDescriptionTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
`;

const InputDescriptionText = styled.p`
  color: #8b95a1;
  font-size: 9.5px;
  font-weight: 400;
`;

export default InputDescription;
