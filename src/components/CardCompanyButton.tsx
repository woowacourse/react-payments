import styled from 'styled-components';
import type { CARD_COMPANY } from '../constants/cardCompany';
import { BC, HANA, HYUNDAI, KAKAOBANK, KUKMIN, LOTTE, SINHAN, WOORI } from '../svg';
import { Text } from './common/Text';

const CARD_COMPANY_LOGO = {
  BC카드: <BC />,
  신한카드: <SINHAN />,
  카카오뱅크: <KAKAOBANK />,
  현대카드: <HYUNDAI />,
  우리카드: <WOORI />,
  롯데카드: <LOTTE />,
  하나카드: <HANA />,
  국민카드: <KUKMIN />,
} as const;

export type CardCompanyButtonProps = {
  cardCompany: (typeof CARD_COMPANY)[number];
  handleOnClick: (value: CardCompanyButtonProps['cardCompany']) => void;
};

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  border: none;
`;

export const CardCompanyButton = (props: CardCompanyButtonProps) => {
  const { cardCompany, handleOnClick } = props;
  return (
    <Button type="button" onClick={() => handleOnClick(cardCompany)}>
      {CARD_COMPANY_LOGO[cardCompany]}
      <Text size="small" weight="normal">
        {cardCompany}
      </Text>
    </Button>
  );
};
