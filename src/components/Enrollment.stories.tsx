import Enrollment from "./Enrollment";
import type { Meta, StoryObj } from "@storybook/react-vite";
import styled from "@emotion/styled";
import { MemoryRouter } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const meta: Meta<typeof Enrollment> = {
  title: "Components/Enrollment",
  component: Enrollment,
};

export default meta;

type Story = StoryObj<typeof Enrollment>;

export const Default: Story = {
  render: () => {
    const cardNumber = [1234, 1234, 1234, 1234];
    const brand = "국민카드";
    const handleClick = () => {};

    return (
      <MemoryRouter>
        <Wrapper>
          <CheckIcon />
          <Phrase>
            <span>{cardNumber[0]}로 시작하는</span>
            <span>{brand}가 등록되었어요.</span>
          </Phrase>
          <Button onClick={() => handleClick()}>확인</Button>
        </Wrapper>
      </MemoryRouter>
    );
  },
};

const Wrapper = styled.div`
  background-color: white;
  width: 376px;
  height: 750px;
  border-radius: 10px;
  padding: 0 20px 20px 20px;
  overflow-y: auto;
  position: relative;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckIcon = styled(FaCheckCircle)`
  width: 76px;
  height: 76px;
`;

const Phrase = styled.p`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-weight: 700;
  font-size: 25px;
  line-height: 100%;
  color: rgba(53, 60, 73, 1);
  text-align: center;

  span {
    margin: 0px;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 44px;
  border: none;
  border-radius: 5px;
  background-color: rgba(51, 51, 51, 1);
  font-weight: 700;
  font-size: 15px;
  line-height: 100%;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
`;
