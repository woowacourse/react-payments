import styled from '@emotion/styled';
import MasterCard from '../../assets/Mastercard.svg';
import VisaCard from '../../assets/visa-logo.svg';
import DinersCard from '../../assets/diners-logo.svg';
import AmexCard from '../../assets/amex-logo.svg';
import UnionPayCard from '../../assets/unionpay-logo.svg';
import type { NetworkBrand } from '../../context/CardContext';

export function CardNetworkBrand({ networkBrand }: { networkBrand: Exclude<NetworkBrand, ''> }) {
  const selectBrandImage = (brand: Exclude<NetworkBrand, ''> | undefined) => {
    if (brand === 'visa') return VisaCard;
    if (brand === 'master') return MasterCard;
    if (brand === 'diners') return DinersCard;
    if (brand === 'amex') return AmexCard;
    if (brand === 'unionpay') return UnionPayCard;
  };

  return (
    <CardNetworkBrandContainer>
      <img src={selectBrandImage(networkBrand)} alt={`${networkBrand}-network-brand-logo`}></img>
    </CardNetworkBrandContainer>
  );
}

const CardNetworkBrandContainer = styled.div`
  height: 22px;
  width: 36px;
  border-radius: 4px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 21.75px;
    height: 13.31px;
  }
`;
