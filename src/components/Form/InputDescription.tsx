import styled from "styled-components";

export interface InputDescriptionProps {
  title: string;
  description?: string;
}

const Styled = {
  InputDescriptionTitle: styled.h2`
    font-size: 18px;
    font-weight: 700;
  `,

  InputDescriptionText: styled.p`
    color: #8b95a1;
    font-size: 9.5px;
    font-weight: 400;
  `,
};

const InputDescription = ({ title, description }: InputDescriptionProps) => {
  return (
    <div>
      <Styled.InputDescriptionTitle>{title}</Styled.InputDescriptionTitle>
      <Styled.InputDescriptionText>{description}</Styled.InputDescriptionText>
    </div>
  );
};

export default InputDescription;
