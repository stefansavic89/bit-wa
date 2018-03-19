import React from 'react';
import UserProperty from './UserProperty';
import PropTypes from "prop-types";


const UserList = (props) =>{
    return (
        <div>
            {props.items.map(userElement => {
                return <UserProperty name={userElement.name} email={userElement.email} dateOfBirth={userElement.dateOfBirth} />
            })}
        </div>
    )
}

UserList.propTypes = {
    items: PropTypes.array.isRequired
}

export default UserList;