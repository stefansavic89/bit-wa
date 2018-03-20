import React from 'react'
import UserCard from './UserCard.js';

const UserGrid = (props) => {
    return (
        <div className="row">
            {props.users.map((user) => {
                return <UserCard user={user} key={user.id} />
            })}
        </div>
    )
}

export default UserGrid;