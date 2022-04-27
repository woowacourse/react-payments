import React from 'react';

import LetterCounter from './LetterCounter';

export default {
  title: 'LetterCounter',
  component: LetterCounter,
  argTypes: {
    currentLength: { control: 'number' },
    maxLength: { control: 'number' },
  },
};

const Template = args => <LetterCounter {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  currentLength: 0,
  maxLength: 30,
};

// export default {
//     title: 'Calendar',
//     component: Calendar,
//     argTypes: {
//       items: { control: 'array' },
//       placeholder: { control: 'text' },
//     },
//   };

//   const Template = args => {
//     const [item, setItem] = useState();
//     return <Calendar {...args} setItem={setItem} />;
//   };
//   export const Primary = Template.bind({});

//   Primary.args = {
//     items: [1, 2, 3, 4],
//     placeholder: 'MM',
//   };
