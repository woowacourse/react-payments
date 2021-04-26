import React from 'react';
// import PropTypes from 'prop-types';
import * as Styled from './style.js';
import { Header } from '../Page/Header';
import { CardRegister } from '../Page/Body/CardRegister';
import { Footer } from '../Page/Footer';

/**
 * Primary UI component for user interaction
 */
export const Page = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Header />
      </Styled.Header>
      <Styled.Body>
        <CardRegister />
      </Styled.Body>
      <Styled.Footer>
        <Footer text={'다음'} />
      </Styled.Footer>
    </Styled.Container>
  );
};

Page.propTypes = {};

Page.defaultProps = {};
