import styled from 'styled-components';
import { CardCompany } from '../../../types';

interface Props {
  name: CardCompany;
  logo: string;
  setCardCompany: (input: CardCompany) => void;
}

export function CardCompanyItem({ name, logo, setCardCompany }: Props) {
  return (
    <Style.Wrapper>
      <Style.Button
        type={'button'}
        aria-label={`${name} 선택`}
        onClick={() => setCardCompany(name)}
      >
        <Style.Img src={logo} alt={`${name} 로고`} />
        <Style.Caption>{name}</Style.Caption>
      </Style.Button>
    </Style.Wrapper>
  );
}

const Style = {
  Wrapper: styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  Img: styled.img`
    width: 37px;
    height: 37px;
  `,

  Button: styled.button`
    all: unset;

    display: flex;
    flex-direction: column;
    align-items: center;

    cursor: pointer;
    &:hover {
      transition: all 0.2s linear;
      transform: scale(1.05);
    }
  `,

  Caption: styled.p`
    margin-top: 10px;

    font-size: 14px;
    font-weight: 600;
  `,
};
