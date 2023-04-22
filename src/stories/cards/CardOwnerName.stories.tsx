import { ChangeEvent } from 'react';
import type { Meta } from '@storybook/react';
import CardOwnerName from '../../components/CardAddForm/CardOwnerName/CardOwnerName';

const meta = {
  title: 'Payments/Cards/CardOwnerNameInput',
  component: CardOwnerName,
  tags: ['autodocs'],
} satisfies Meta<typeof CardOwnerName>;

export default meta;

// export const Default = () => (
//   <CardOwnerName
//     onChange={({ target: { value, dataset } }: ChangeEvent<HTMLInputElement>) => {}}
//     value=""
//   ></CardOwnerName>
// );
