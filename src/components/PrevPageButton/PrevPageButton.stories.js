import PrevPageButton from './PrevPageButton';
import { useState } from 'react';

export default {
  title: 'CardAddPage/PrevPageButton',
  component: PrevPageButton,
};

const Template = (args) => {
  const [page, setPage] = useState(args.page);
  return <PrevPageButton setPage={setPage} page={page} />;
};

export const Default = Template.bind({});
