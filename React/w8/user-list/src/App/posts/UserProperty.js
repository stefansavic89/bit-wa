import React from 'react';
import PropTypes from "prop-types";

const UserProperty = (props) => {
    return (
        <div className="circle">
          <header className="circle">
            <img src="" className="circle" alt="logo" />
            <h1 className="circle">{props.name.first}</h1>
          </header>
          <p className="circle">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      );
}

UserProperty.propTypes = {
    name: PropTypes.string.isRequired, 
    email: PropTypes.string.isRequired,
    dateOfBirth:PropTypes.number.isRequired
}

export default UserProperty;