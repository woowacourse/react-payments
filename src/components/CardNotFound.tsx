import styled from 'styled-components';
import { Layout } from '../layout';
import { BackButton } from './Button/BackButton';

const imageUrl =
  'https://img.freepik.com/free-photo/high-angle-dog-making-a-mess-with-toilet-paper_23-2149544912.jpg?w=2000&t=st=1683042025~exp=1683042625~hmac=d692d7303bf32037bf61ca2f6c8e0a8930b299e8e2c3f447ec45d5c3740267b3';

export function CardNotFound() {
  return (
    <Layout>
      <Style.Container>
        <Style.ButtonWrapper>
          <BackButton path='/register' />
        </Style.ButtonWrapper>
        <Style.Image src={imageUrl} alt='카드 정보를 찾을 수 없어요.'></Style.Image>
        <Style.ImageSource>
          이미지 출처:
          <a href='https://kr.freepik.com/free-photo/high-angle-dog-making-a-mess-with-toilet-paper_29652590.htm#query=No%20data%20dog&position=8&from_view=search&track=ais'>
            Freepik
          </a>
        </Style.ImageSource>
        <Style.Title>카드 등록에 문제가 생겼어요.</Style.Title>
        <Style.Content>
          같은 문제가 반복된다면 웹 페이지를 껐다 켠 후<br />
          처음부터 다시 한번 시도해주세요. <br />
        </Style.Content>
      </Style.Container>
    </Layout>
  );
}

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    padding: 30px;
    border-radius: 8px;
  `,

  Title: styled.span`
    margin-top: 30px;

    font-size: 24px;
    font-weight: bold;
    text-align: justify;
  `,

  Content: styled.p`
    margin-top: 15px;

    font-size: 16px;
    text-align: justify;
    color: #6f6f6f;
  `,

  Image: styled.img`
    display: block;

    width: 200px;
    border-radius: 10px;
  `,

  ButtonWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 30px;
    height: 30px;

    position: absolute;
    left: 30px;
    border-radius: 5px;
    background-color: #ffa759;
  `,

  ImageSource: styled.p`
    margin-top: 10px;

    font-size: 10px;
    color: #6f6f6f;

    & a {
      color: inherit;
      text-decoration: none;
    }
  `,
};
