import React from 'react';
import UserItem from './userInfo.js';

const UserList = (props) => {
    return (
            <div className="row">
            {props.items.map((item, i)=> <UserItem key={i} user={item}/>)}   
        </div>
    )
}


export default UserList; 