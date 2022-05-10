//Dashboard.js: create the dashboard page here

//previous created styles
import {
    StyledInputField,
    StyledTitle,
    Avatar,
    StyledButton,
    ButtonGroup,
    StyledFormArea,
}
from "./../components/Styles";
//navbar
import Navbar from "./NavBar";
//Logo
import Logo from "./../assets/Merkel.png";
//react
import React from "react";


const Dashboard = () => {
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
                 
            </div>
                                
            <Navbar />
            <StyledFormArea>
          
            <Avatar image={Logo}/>
            
                <StyledTitle size={65}>Welcome, Angela Merkel!</StyledTitle>
               


              


                <ButtonGroup>
                    <StyledButton to="personal">Personal Information</StyledButton>
               
                    <StyledButton to="#">Transaction</StyledButton>
               
                    <StyledButton to="voting">Voting</StyledButton>
                    </ButtonGroup>
                    <ButtonGroup>
                    <StyledButton to="/">Logout</StyledButton>
                </ButtonGroup>
            </StyledFormArea>
        </div>
    );
}

export default Dashboard;