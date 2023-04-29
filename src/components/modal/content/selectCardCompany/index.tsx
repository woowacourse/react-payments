import styled from 'styled-components';
import { COMPANIES } from '../../../../constants/cardCompany';
import { CardCompany } from './CardCompany';
import { v4 } from 'uuid';
import { useCardInfoActionContext } from '../../../../hooks/cardInfoContext';

interface Props {
  closeModal: () => void;
}

export const isCompanyId = (
  id: string | undefined
): id is keyof typeof COMPANIES => {
  if (id === undefined) return false;

  return Object.keys(COMPANIES).includes(id);
};

export const SelectCardCompanyModal = ({ closeModal }: Props) => {
  const { setCompanyId } = useCardInfoActionContext();

  const handleClick: React.MouseEventHandler = (e) => {
    if (!(e.target instanceof HTMLElement)) return;

    const selectedCompanyIcon = e.target.closest('.company-icon');

    if (!(selectedCompanyIcon instanceof HTMLDivElement)) return;

    const companyId = selectedCompanyIcon.dataset.companyId;

    if (!isCompanyId(companyId)) return;

    closeModal();
    setCompanyId(companyId);
  };

  return (
    <Style.Wrapper onClick={handleClick}>
      <Style.RowContainer>
        {Object.keys(COMPANIES)
          .slice(0, 4)
          .map((companyId) => (
            <CardCompany key={v4()} companyId={companyId} />
          ))}
      </Style.RowContainer>
      <Style.RowContainer>
        {Object.keys(COMPANIES)
          .slice(4)
          .map((companyId) => (
            <CardCompany key={v4()} companyId={companyId} />
          ))}
      </Style.RowContainer>
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.div`
    width: 318px;
    height: max-content;

    display: flex;
    flex-direction: column;

    gap: 15px;
  `,
  RowContainer: styled.div`
    width: 318px;

    display: flex;
    justify-content: space-between;
  `,
};
