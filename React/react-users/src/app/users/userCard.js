import React from 'react';

const UserItem2 = (props) => {
    return (
        <div >
        <div className="col s12 m4">
          <div className={"card " + props.user.gender}>
          
            <div className="card-image">
              <img alt='' src={props.user.photo}/>
              <span className="card-title">{props.user.name}</span>
            </div>
            <div className="card-content">
              <p>{props.user.email}</p>
              <p>Birth date:  {props.user.date}</p>
            </div>
            
          </div>
        </div>
      </div>
                
    )
}

export default UserItem2; 