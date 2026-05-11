import type { Meta, StoryObj } from "@storybook/react-vite";
import styled from "@emotion/styled";
import Password from "./Password";
import { PasswordProvider } from "../../../context/password/PasswordProvider";
import Input from "./Input";

const meta: Meta<typeof Password> = {
  title: "Components/Password",
  component: Password,
};

export default meta;

type Story = StoryObj<typeof Password>;

export const Default: Story = {
  render: () => {
    return (
      <PasswordProvider>
        <Wrapper>
          <Header>비밀번호를 입력해 주세요</Header>
          <SubHeader>앞의 2자리를 입력해주세요</SubHeader>
          <Label>비밀번호 앞 2자리</Label>
          <Input />
        </Wrapper>
      </PasswordProvider>
    );
  },
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
`;

const Header = styled.h2`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0%;
  line-height: 100%;
  vertical-align: middle;
  color: rgba(0, 0, 0, 1);
  margin: 2px 0;
`;

const SubHeader = styled.h3`
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
