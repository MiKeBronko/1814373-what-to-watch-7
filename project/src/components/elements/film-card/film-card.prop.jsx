import PropTypes from 'prop-types';

const filmPropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
};

const filmCardPropTypes = {
  film: PropTypes.shape(filmPropTypes).isRequired,
  onMouseOver: PropTypes.func.isRequired,
};

export default filmCardPropTypes;
