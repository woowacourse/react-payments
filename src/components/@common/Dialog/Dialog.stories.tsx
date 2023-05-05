import React from 'react';
import type { Meta } from '@storybook/react';
import Dialog from './Dialog';
import styled from 'styled-components';

export const DefaultOpened = () => (
  <Dialog defaultOpen>
    <Dialog.BackDrop />
    <Dialog.Portal>
      <Dialog.Content>
        <h1>title</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias nemo id doloremque ducimus magni
          modi rem omnis dolorum numquam soluta perferendis accusamus obcaecati maiores necessitatibus earum,
          sint quae aspernatur cumque?
        </div>
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog>
);

export const Trigger = () => (
  <Dialog>
    <Dialog.Trigger />
    <Dialog.Portal>
      <Dialog.BackDrop />
      <Dialog.Content>
        <h1>title</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias nemo id doloremque ducimus magni
          modi rem omnis dolorum numquam soluta perferendis accusamus obcaecati maiores necessitatibus earum,
          sint quae aspernatur cumque?
        </div>
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog>
);

export const DisableTrigger = () => (
  <Dialog open={false}>
    <Dialog.Trigger />
    <Dialog.Portal>
      <Dialog.BackDrop />
      <Dialog.Content>
        <h1>title</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias nemo id doloremque ducimus magni
          modi rem omnis dolorum numquam soluta perferendis accusamus obcaecati maiores necessitatibus earum,
          sint quae aspernatur cumque?
        </div>
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog>
);

export const ContentAsChild = () => (
  <Dialog>
    <Dialog.Trigger />
    <Dialog.Portal>
      <Dialog.BackDrop />
      <Dialog.Content asChild>
        <ChildContent>
          <h1>This is child content</h1>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias nemo id doloremque ducimus magni
            modi rem omnis dolorum numquam soluta perferendis accusamus obcaecati maiores necessitatibus
            earum, sint quae aspernatur cumque?
          </div>
          <Dialog.Close />
        </ChildContent>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog>
);

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
};

export default meta;

const ChildContent = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;

  padding: 40px 50px;

  z-index: 9999;

  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;

  @keyframes showFromBottom {
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation: showFromBottom 1050ms cubic-bezier(0.16, 1, 0.3, 1);
`;
