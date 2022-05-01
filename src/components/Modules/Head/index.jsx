import { HeadContainer, BackButton, Title } from '../../../style/head';

function Head({ title }) {
  return (
    <HeadContainer>
      <BackButton>＜</BackButton>
      <Title>{title}</Title>
    </HeadContainer>
  );
}

export default Head;
