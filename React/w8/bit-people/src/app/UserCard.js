import React from 'react'
// import PropTypes from 'prop-types'

const UserCard = (props) => {
    return (
        <div className="col s4 m 4">
            <div className="card">
                <div className="card-image">
                    <img src={props.user.photo} alt="slika" />
                    <span className="card-title">{props.user.firstName}</span>
                </div>
                <div className="card-content">
                    <p>{props.user.email}</p>
                </div>
            </div>
        </div>
    )
}


export default UserCard;