import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div `
display:flex;
justify-content:space-evenly;
flex-direction:row;
border: 2px solid black;
border-radius: 5px;
width: 60%;
height: 15vh;

.top-card{
    display:flex;
    justify-content:flex-start;
    align-items: center;
    width:40%;
}
.top-card > img, h2{

}

img {
    height: 8vh;
    margin-right: 5%;
    border: 1px solid black;
    border-radius: 5px;
}

.info-container {
    text-align:left;
    display:flex;
    flex-flow:column;
    justify-content:center;
}
.detail {
    display:flex;
    align-items:center;
    height: 15%;
    font-size: .9rem;
}
.detail > h3{
    margin-right: 3%;
}
a {
    text-decoration: none;
}
`


const Card = props => {
    return (
        <StyledCard>
            <div className="top-card">
                <img src={props.userInfo.avatar_url}/>
                <h2>{props.userInfo.name}</h2>
            </div>
            <div className="info-container">
                <div className='detail'><h3>Bio: </h3><p>{props.userInfo.bio}</p></div>
                <div className='detail'><h3>Location: </h3><p>{props.userInfo.location}</p></div>
                <div className='detail'><h3>URL: </h3><p><a href={props.userInfo.html_url}>{props.userInfo.html_url}</a></p></div>
                <div className='detail'><h3>Followers: </h3><p>{props.userInfo.followers}</p></div>
                <div className='detail'><h3>Following: </h3><p>{props.userInfo.following}</p></div>
            </div>
        </StyledCard>
    )
};

export default Card;