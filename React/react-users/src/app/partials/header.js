import React from 'react';
import PropTypes from "prop-types";

const Header = (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="" className="brand-logo center">{props.title}</a>
                <div className = "row">
                <ul className="right hide-on-med-and-down">
                    <li><a onClick={props.updateClick}><i className="material-icons">refresh</i></a></li>
                    <li><a onClick={props.handleClick}><i className="material-icons">{props.showList ? "view_list" : "view_module"}</i></a></li>
                </ul>
                </div>
            </div>
        </nav>
    )
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header; 