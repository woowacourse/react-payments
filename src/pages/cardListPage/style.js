import styled from 'styled-components';

const Styled = {
  CardListContainer: styled.div`
    margin-top: 60px;
  `,
  CardContainer: styled.div`
    margin-bottom: 26px;

    &:hover {
      .update-card {
        display: block;
      }
      .delete-card {
        display: block;
      }
    }
  `,
  NickName: styled.div`
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    color: #575757;
    margin-top: 10px;
  `,
  ButtonContainer: styled.div`
    display: flex;
    justify-content: space-between;
    width: 208px;
    margin: 10px auto 0 auto;
  `,
  AddButtonContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};

export default Styled;
