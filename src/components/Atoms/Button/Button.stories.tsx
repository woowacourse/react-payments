import Button from './index';

interface ButtonArgs {
  hidden: boolean;
}

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    ref: {
      table: {
        disable: true,
      },
    },
    theme: {
      table: {
        disable: true,
      },
    },
    as: {
      table: {
        disable: true,
      },
    },
    forwardedAs: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default = (args: ButtonArgs) => {
  return (
    <Button type="button" {...args}>
      다음
    </Button>
  );
};
