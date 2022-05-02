import { create } from '@storybook/theming';
import Logo from './asset/compy-logo.png';

export default create({
  base: 'dark',
  brandTitle: '콤피의 StoryBook',
  brandImage: Logo,

  colorPrimary: '#ff7611',
  colorSecondary: '#91b900',
});
