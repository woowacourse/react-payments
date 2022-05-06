import styled from 'styled-components';
import CardAlignBox from 'components/CardAlignBox';
import CardBox from 'components/CardBox';

export default function AnotherCard() {
  return (
    <CardAlignBox>
      <CardBox isSmall={true} color={'#e5e5e5'}>
        <Styled.Sign>{'+'}</Styled.Sign>
      </CardBox>
    </CardAlignBox>
  );
}

const Styled = {
  Sign: styled.span`
    font-size: 40px;
    font-weight: 800;
    color: #525252;
  `,
};
