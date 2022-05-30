import PropTypes from 'prop-types';
import { HeaderProps } from '@/types/commonComponents';

function Header({ className, children }: HeaderProps) {
  return <h1 className={`page-title ${className}`}>{children}</h1>;
}

Header.defaultProps = {
  className: '',
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
