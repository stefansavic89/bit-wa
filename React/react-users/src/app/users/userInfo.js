import React from 'react';
import './userInfo.css';

const UserItem = (props) => {
    const bgStyle = {
        backgroundColor: props.user.gender === "female" ? '#ffebee' : '#89C4F4'
    }
    
    return (
        <div>
        <div className="collection">
        <ul className="collection-item avatar" style={bgStyle} >
            <li>
                <img className="circle" alt="" src={props.user.photo}/>
                <p>{props.user.name}</p>
                <p><i className="material-icons">email</i>email: {props.user.getEmail()}</p>
                <p><i className="material-icons">cake</i>{props.user.getDate()}</p>
            </li>
            </ul>
        </div>
        </div>
    )
}

export default UserItem; 