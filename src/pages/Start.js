//Start.js: This page is our first page the user will see
//direct you to sign up or login

//import already created custom styles
import {StyledTitle,StyledCol,StyledDiv, StyledImage, ImgTitle, ImgDesc, StyledSubTitle, Avatar, StyledButton, ButtonGroup} from "./../components/Styles";
//import react components
import React, {Component} from 'react';
//Logo
import Logo from "./../assets/seam.png";



const Start = () => {
    return (
        <div>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "transparent",
                    width: "100%",
                    padding: "15px",
                    display: "flex",
                    justifyContent: "flex-start",
                }}
            >
                <Avatar image={Logo} />
            </div>
        <StyledTitle size={65}>
            Welcome to SEAM!
        </StyledTitle>
            
        <StyledSubTitle size = {30}>
             We are happy you are here!
        </StyledSubTitle>
        
        <ButtonGroup>                          
            <StyledButton to="/login">
                Login
            </StyledButton>
            <StyledButton to="/signup">
                Signup
            </StyledButton>
        </ButtonGroup>  
     
        </div>
    );
}

export default Start;