import React from 'react';

import UserItem2 from './userCard.js';


const UserGrid = (props) => {
    return (
            <div className="row">
            {props.items.map((item, i)=> <UserItem2 key={i} user={item}/>)}   
        </div> 
    )
}

export default UserGrid; 