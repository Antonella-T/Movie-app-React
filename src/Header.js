import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

function Header() {
  return (
    <header className="App-header">
      <h1>WATCH <FontAwesomeIcon icon={faEye} /> MOVIES</h1>
      
      <div className="LoginContainer">
        <FontAwesomeIcon icon={faUser} />
        <div className="UserLog">
          <span>Log in</span> / <span>Sign up</span>
        </div>
      </div>

      <form>
        <label className="AppLabelHeader"><FontAwesomeIcon icon={faSearch} /></label>
        <input className="AppInputHeader" type="text" placeholder="Search movie here..."/>
      </form>
    </header>
  );
}

export default Header;