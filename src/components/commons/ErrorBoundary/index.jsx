import React, { Component } from 'react';
import ErrorPage from '../../../pages/404';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch() {
    console.log('hi');
  }

  componentWillUnmount() {
    console.log('cehck');
  }

  render() {
    return this.state.hasError ? <ErrorPage /> : this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

export default ErrorBoundary;
