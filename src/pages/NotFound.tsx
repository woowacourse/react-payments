import styled from 'styled-components';
import { Layout } from '../layout';
import { BackButton } from '../layout/BackButton';

const imageUrl =
  'https://user-images.githubusercontent.com/24777828/233794760-2bc92a8d-4439-4dff-a46d-54f9311bffac.JPG';

export const NotFound = () => {
  return (
    <Layout>
      <Style.Wrapper>
        <Style.ButtonContainer>
          <BackButton path='/' />
        </Style.ButtonContainer>
        <Style.Image src={imageUrl} alt='페이지를 찾을 수 없습니다.'></Style.Image>
        <Style.Title>길을 잃으셨나요?</Style.Title>
        <Style.Content>
          방문하시려는 페이지의 주소가 잘못 입력되었거나, <br />
          페이지 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다. <br />
          <br />
          입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
          <br />
          {'관련 문의사항은 '}
          <Style.Email href='mailto:chex1004@gmail.com'>고객센터</Style.Email>
          {'에 연락주시면 친절하게 안내해드리겠습니다.'}
          <br />
          <br />
          감사합니다.
        </Style.Content>
      </Style.Wrapper>
    </Layout>
  );
};

const Style = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    padding: 30px;
    border-radius: 8px;
  `,

  Title: styled.span`
    margin-top: 30px;

    font-size: 30px;
    font-weight: bold;
    text-align: justify;
  `,

  Content: styled.p`
    margin-top: 10px;

    font-size: 16px;
    text-align: justify;
    color: #6f6f6f;
  `,

  Image: styled.img`
    display: block;

    width: 200px;
    border-radius: 10px;
  `,

  Email: styled.a`
    color: #ff8114;

    :hover,
    :focus {
      color: #8aba19;
    }
  `,

  ButtonContainer: styled.div`
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
};
