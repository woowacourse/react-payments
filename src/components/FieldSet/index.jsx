import PropTypes from 'prop-types';
import Label from '../Label/index';
import ErrorMessage from '../ErrorMessage/index';
import * as Styled from './index.styled';

const FieldSet = ({ id, description, children, errorMessage, isError }) => {
  return (
    <Styled.Container>
      <Label id={id} description={description} />
      {children}
      <Styled.ErrorMessageContainer>
        {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Styled.ErrorMessageContainer>
    </Styled.Container>
  );
};

FieldSet.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  errorMessage: PropTypes.string,
  children: PropTypes.element,
  isError: PropTypes.bool,
};

export default FieldSet;
