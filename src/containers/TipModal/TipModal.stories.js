import TipModal from './TipModal';

const backdropRoot = document.createElement('div');
backdropRoot.setAttribute('id', 'backdrop-root');
document.body.append(backdropRoot);

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'overlay-root');
document.body.append(modalRoot);

export default {
  title: 'containers/TipModal',
  component: TipModal,
  args: {
    onCloseModal: () => null,
  },
};

const Template = (args) => <TipModal {...args} />;

export const Example = Template.bind({});
