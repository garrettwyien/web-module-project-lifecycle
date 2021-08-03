import React from 'react';

const Card = props => {
    return (
        <div className="card">
            <div className="top-card">
                <h2>{props.userInfo.name}</h2>
                <img src={props.userInfo.avatar_url}/>
            </div>
            <div className="info-container">
                <p>Bio: {props.userInfo.bio}</p>
                <p>Location: {props.userInfo.location}</p>
                <p>URL: {props.userInfo.html_url}</p>
                <p>Followers: {props.userInfo.followers}</p>
                <p>Following: {props.userInfo.following}</p>
            </div>
        </div>
    )
};

export default Card;