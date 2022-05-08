import CardListModal from './CardListModal';

const backdropRoot = document.createElement('div');
backdropRoot.setAttribute('id', 'backdrop-root');
document.body.append(backdropRoot);

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'overlay-root');
document.body.append(modalRoot);

export default {
  title: 'containers/CardListModal',
  component: CardListModal,
  args: {
    onCloseModal: () => null,
  },
};

const Template = (args) => <CardListModal {...args} />;

export const Example = Template.bind({});
