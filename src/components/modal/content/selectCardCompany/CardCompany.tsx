import styled from 'styled-components';
import { COMPANIES } from '../../../../constants/cardCompany';

interface Props {
  companyId: string;
}

export const CardCompany = ({ companyId }: Props) => {
  return (
    <Style.Wrapper className="company-icon" data-company-id={companyId}>
      <Style.CompanyImage
        src={COMPANIES[companyId as keyof typeof COMPANIES].img}
      />
      <Style.CompanyName>
        {COMPANIES[companyId as keyof typeof COMPANIES].name}
      </Style.CompanyName>
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.div`
    height: 62px;
    width: 75px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;
  `,
  CompanyImage: styled.img`
    width: 37px;
    height: 37px;
  `,
  CompanyName: styled.span`
    font-size: 12px;

    color: #525252;
  `,
};
