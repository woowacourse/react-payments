import type { Meta } from '@storybook/react';

import { useState } from 'react';
import { BottomSheet } from '../../components/modal/template/BottomSheet';

const meta = {
  title: 'Example/Modal',
  component: BottomSheet,
  tags: ['autodocs'],
} satisfies Meta<typeof BottomSheet>;

export default meta;

export const BottomSheetStory = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return <>{isOpen && <BottomSheet>{}</BottomSheet>}</>;
};
