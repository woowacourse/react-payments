import PropTypes from 'prop-types';

function PageTitle({ title }) {
  return <h1 className="page-title">{title}</h1>;
}

export default PageTitle;

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
