import React from "react";
import Card from "./CardMaker";
import {connect} from 'react-redux';
import styled from 'styled-components';

const CharacterCards = (props) => {
    return (
        <StyledWrapper className="card-wrapper">
            {props.characters.map(character => {
                return <Card character={character} />
            })}
        </StyledWrapper>
    );
};

const mapStateToProps = state => {
    return {
        characters: state.characters,
    }
}

const StyledWrapper = styled.div`
    background-color: #192823;
    display:flex;
    flex-flow: row wrap;
    justify-content: space-around;
`

export default connect(mapStateToProps)(CharacterCards);
