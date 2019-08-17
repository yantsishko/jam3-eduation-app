import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import s from './style.less';

export default function Footer(props) {
  return (
    <footer>
      Footer
    </footer>
  );
}

Footer.propTypes = {
  marginTop: PropTypes.number,
};

Footer.defaultProps = {
  marginTop: 0,
};
