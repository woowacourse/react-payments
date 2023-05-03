import styled from "styled-components";
import { Page } from "components/common/Page";
import { SubmitButton } from "components/common/Button";

const St = {
  Page: styled(Page)`
    justify-content: flex-start;
    height: 100vh;
    gap: 70px;
  `,

  Title: styled.h2`
    margin-top: 30%;

    text-align: center;
    font-size: 28px;
  `,

  CardAlias: styled.input`
    align-self: center;

    width: 70%;
    border-bottom: solid;

    text-align: center;
    font-size: 24px;
  `,

  CardAliasForm: styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    height: 100%;
  `,

  SubmitButton: styled(SubmitButton)`
    margin-top: auto;
  `,
};

export default St;
