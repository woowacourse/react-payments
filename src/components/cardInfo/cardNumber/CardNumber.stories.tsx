import type { Meta, StoryObj } from "@storybook/react-vite";
import CardNumber from "./CardNumber";
import { CardNumberProvider } from "../../../context/cardNumber/CardNumberProvider";
import styled from "@emotion/styled";
import Input from "./Input";

const meta: Meta<typeof CardNumber> = {
  title: "Components/CardNumber",
  component: CardNumber,
};

export default meta;

type Story = StoryObj<typeof CardNumber>;

export const Default: Story = {
  render: () => {
    return (
      <CardNumberProvider>
        <Wrapper>
          <Header>결제할 카드 번호를 입력해 주세요</Header>
          <SubHeader>본인 명의의 카드만 결제 가능합니다.</SubHeader>
          <Label>카드 번호</Label>
          <Input />
        </Wrapper>
      </CardNumberProvider>
    );
  },
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0%;
  line-height: 100%;
  vertical-align: middle;
  color: rgba(0, 0, 0, 1);
  margin: 0;
`;

const SubHeader = styled.h2`
  font-size: 9.5px;
  font-weight: 400;
  letter-spacing: 0%;
  line-height: 100%;
  vertical-align: middle;
  color: rgba(139, 149, 161, 1);
  margin: 6px 0 0 0;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  vertical-align: middle;
  color: rgba(10, 13, 19, 1);
  margin: 6px 0;
`;
