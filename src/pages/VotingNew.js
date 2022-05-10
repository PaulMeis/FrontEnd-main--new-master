//VotingNew.js: This page displays the currently available polls and lets you direct to them

//import already created custom styles
import {
    StyledFormArea,
    StyledFormButton,
    Avatar,
    StyledTitle,
    colors,
    ButtonGroup,
    TextLink,
    ExtraText,
    StyledButton
} from "./../components/Styles";
//import Logo from assets
import Logo from './../assets/seam.png';
//import React Components
import React, {Component} from 'react';
//auth reudx
import { connect } from 'react-redux';
import { signupUser } from "../auth/actions/userActions";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";

const VotingNew = ({signupUser}) => {
    return (
     
        <div>
               <Navbar/>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.yellow} size={30}>
                    Poll Options:
                </StyledTitle>

                <ExtraText>
                    <TextLink to="/voteSenate">Vote HERE for Senate!</TextLink>
                </ExtraText>
                <ExtraText>
                    <TextLink to="/voteStarbucks">Vote HERE for Starbucks!</TextLink>
                </ExtraText>
               
            </StyledFormArea>
        </div>
    );
};
export default VotingNew;