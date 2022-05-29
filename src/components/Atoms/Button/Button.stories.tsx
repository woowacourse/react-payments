import Button from './index';

interface Args {
  hidden: boolean;
}

export default {
  title: 'Atoms/Button',
  component: Button,
};

export const Default = (args: Args) => {
  return (
    <Button type="button" {...args}>
      다음
    </Button>
  );
};
