import { BlockInput, UnderlineInput } from '.';

interface BlockInputArgs {
  isValid: boolean;
}

interface UnderlineInputArgs {}

export default {
  title: 'Atoms/Input',
};

export const BlockInputExample = (args: BlockInputArgs) => <BlockInput {...args} />;

export const UnderlineInputExample = (args: UnderlineInputArgs) => <UnderlineInput {...args} />;
