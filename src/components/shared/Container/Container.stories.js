import React from 'react';
import Container from '.';

export default {
  component: Container,
  title: 'Shared/Container',
};

const Template = args => (
  <Container {...args}>
    <div style={{ height: '100px' }} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {};

export const BackgroundColor = Template.bind({});
BackgroundColor.args = {
  backgroundColor: 'red',
};
