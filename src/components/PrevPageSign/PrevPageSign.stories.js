import PrevPageSign from './PrevPageSign';
import { useState } from 'react';

export default {
  title: 'CardAddPage/PrevPageSign',
  component: PrevPageSign,
};

const Template = (args) => {
  const [page, setPage] = useState(args.page);
  return <PrevPageSign setPage={setPage} />;
};

export const Default = Template.bind({});
