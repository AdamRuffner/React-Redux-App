import React from "react";
import styled from 'styled-components';

const Card = ({character}) => {

    return (
        <StyledParentDiv>
            <StyledCard className='card'>
                <StyledH1>{character.name}</StyledH1>
                <div className="card-image-wrapper">
                    <StyledImg
                        alt={character.name}
                        className="card-image"
                        src={character.image}
                    />
                </div>
                <InfoDiv className = "info-wrapper">
                    <p><b>Species</b>: {character.species}</p>
                    <p><b>Gender:</b> {character.gender}</p>
                    <p><b>Status:</b> {character.status}</p>
                    <p><b>Location:</b> {character.origin.name}</p>
                </InfoDiv>
            </StyledCard>
        </StyledParentDiv>
    )
}
const StyledParentDiv = styled.div`   
    background-color: #192823;
    width: 33%;
`

const StyledCard = styled.div`
    background-color: #06A2CB;
    width: 50%;
    border-radius: 25px;
    align-content: space-between;
    margin: 3% auto;
    box-shadow: 10px 10px 10px 10px;
    transition: .2s ease-in-out;

    &:hover {
        background-color:red;
        transform: scale(1.1);
    }

`

const StyledH1 = styled.h1`
    font-family: 'monaco';
`

const InfoDiv = styled.div`
    font-family: 'monaco';
`

const StyledImg = styled.img`
    border-radius: 25px;
`

export default Card;

