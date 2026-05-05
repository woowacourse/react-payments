import styled from '@emotion/styled';
import MasterCard from '../../assets/Mastercard.svg';
import VisaCard from '../../assets/visa-logo.svg';

type NetworkBrand = 'visa' | 'master';

export function CardNetworkBrand({ networkBrand }: { networkBrand: NetworkBrand }) {
  const selectBrandImage = (brand: NetworkBrand | undefined) => {
    if (brand === 'visa') return VisaCard;
    if (brand === 'master') return MasterCard;
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
