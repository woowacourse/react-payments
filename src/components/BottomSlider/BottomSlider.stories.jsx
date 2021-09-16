import React from "react";

import BottomSlider from "./BottomSlider";
import BackDrop from '../BackDrop/BackDrop';
import CircleButton from '../CircleButton/CircleButton';

export default {
  title: "Payments/BottomSlider",
  component: BottomSlider,
};

const Template = (args) => (
  <>
    <BackDrop zIndex={1}/>
    <BottomSlider {...args}>
      {/* TEST */}
      <CircleButton buttonText={"포코카드"} circleColor={"#e24141"} />
    </BottomSlider>
  </>
);

export const Primary = Template.bind({});
Primary.args = {

};
