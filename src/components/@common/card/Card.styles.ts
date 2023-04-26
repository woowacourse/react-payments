import styled from "styled-components";

export const Styled = {
  CardContainer: styled.div`
    width: 213px;
    height: 133px;

    display: flex;
    flex-direction: column;
    row-gap: 13px;
    justify-content: flex-end;

    background: #fff;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    color: var(--darken-color);

    padding: 14px;
    margin: 25px auto;

    box-sizing: border-box;
  `,

  CardName: styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
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
