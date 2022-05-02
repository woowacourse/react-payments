import PropTypes from 'prop-types';

function PageTitle({ title }) {
  return <h2 className="page-title">{title}</h2>;
}

export default PageTitle;

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
