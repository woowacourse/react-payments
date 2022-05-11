import { Button } from '../components';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    bgColor: { control: 'color' },
    shape: {
      options: ['circle', 'rectangle'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
};

function Template(args) {
  const { children } = args;

  return <Button {...args}>{children}</Button>;
}

const Arrow = Template.bind({});
Arrow.args = {
  size: 'small',
  children: (
    <svg
      width="10"
      height="17"
      viewBox="0 0 10 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.30426 1L1.36476 8.78658L9.15134 15.7261"
        stroke="#525252"
        strokeWidth="1.5"
      />
    </svg>
  ),
};

const 다음 = Template.bind({});
다음.args = {
  color: '#04C09E',
  children: '다음',
  fontWeight: 'bold',
};

const 확인 = Template.bind({});
확인.args = {
  color: '#04C09E',
  children: '확인',
  fontWeight: 'bold',
};

const Question = Template.bind({});
Question.args = {
  border: '1px solid #BABABA',
  color: '#969696',
  children: '?',
  shape: 'circle',
  size: 'small',
};

export { Arrow, 다음, 확인, Question };
