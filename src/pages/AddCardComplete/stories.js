import React from 'react';
import { MemoryRouter } from 'react-router';
import AddCardComplete from '.';

const card = {
  serialNumber: '123456781234578',
  expirationDate: '11/29',
  userName: 'SEO JIHWAN',
  securityCode: '011',
  password: '1111',
  cardCompany: 'POCO',
};

export default {
  title: 'Page/AddCardComplete',
  component: AddCardComplete,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={[{ pathname: '/', state: { card } }]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <AddCardComplete {...args} />;

export const Default = Template.bind({});

Default.args = {
  addCards: () => {},
};
