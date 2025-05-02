import styled from 'styled-components';
import Title from '../title/Title';
import Description from '../description/Description';
import {COLORS} from '../../styles/colors';
import {CARD_COMPANY} from '../constants/card';
import {ChangeEvent} from 'react';

type Props = {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  name: string;
};

const CardCompanySection = ({onChange, name}: Props) => {
  return (
    <CardNumberWrap>
      <Title>카드사를 선택해 주세요</Title>
      <Description>현재 국내 카드사만 가능합니다.</Description>
      <Select name={name} onChange={onChange}>
        <option value="" hidden>
          카드사를 선택해주세요
        </option>
        {Object.entries(CARD_COMPANY).map(([key, value]) => (
          <option key={key} value={key}>
            {value.name}
          </option>
        ))}
      </Select>
    </CardNumberWrap>
  );
};

export default CardCompanySection;

const CardNumberWrap = styled.div`
  height: 130px;
`;

const Select = styled.select`
  width: 100%;
  margin-top: 16px;
  padding: 8px;
  border-radius: 2px;
  border: none;
  outline: 1px solid ${COLORS.LIGHT_GRAY};

  &:focus {
    outline: 1px solid '#000';
  }
`;
