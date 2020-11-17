import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="AppFooter">
      <small>&copy; WATCH <FontAwesomeIcon icon={faEye} /> MOVIES 2020</small>
    </footer>
  );
}

export default Footer;