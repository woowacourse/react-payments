import styled from "styled-components";

export const Styled = {
  CardContainer: styled.div`
    width: 213px;
    height: 133px;

    display: flex;
    flex-direction: column;
    row-gap: 13px;
    justify-content: flex-end;

    background: #333333;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    padding: 14px;
    margin: 25px auto;

    box-sizing: border-box;
  `,

  CardChip: styled.div`
    width: 40px;
    height: 26px;
    background: #cbba64;
    border-radius: 4px;
  `,

  CardNumberContainer: styled.div`
    display: flex;
    justify-content: space-around;

    height: 13px;

    color: white;
    font-weight: 600;
    font-size: 10px;
    letter-spacing: 3px;

    span {
      width: 35px;
      display: inline-block;
    }
  `,

  CardNameContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    height: 13px;

    color: white;
    font-weight: 600;
    font-size: 10px;

    span {
      display: inline-bock;
      max-width: 85%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `,
};
