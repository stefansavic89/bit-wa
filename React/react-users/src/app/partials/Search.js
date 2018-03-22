import React from 'react';
// import PropTypes from "prop-types";


const Search = (props) => {
    return (
         <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">search</i>
                        <input id="icon_prefix2" className="materialize-textarea" value ={props.inputValue} onChange={props.handleChange} />
                        <label htmlFor="icon_prefix2"></label>
                    </div>
                </div>
            </form>
        </div>

    )
}


export default Search;