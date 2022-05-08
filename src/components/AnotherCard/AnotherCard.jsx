import styled from 'styled-components';
import FlexColumnBox from 'components/FlexColumnBox/FlexColumnBox';
import CardBox from 'components/CardBox/CardBox';

export default function AnotherCard() {
  return (
    <FlexColumnBox>
      <CardBox isSmall={true} color={'#e5e5e5'}>
        <Styled.Sign>{'+'}</Styled.Sign>
      </CardBox>
    </FlexColumnBox>
  );
}

const Styled = {
  Sign: styled.span`
    font-size: 40px;
    font-weight: 800;
    color: #525252;
  `,
};
