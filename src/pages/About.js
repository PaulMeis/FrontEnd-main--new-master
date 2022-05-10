//About.js: on here our about page is being created and exported
//this page is part of the navbar


//previous created styles
import {StyledSubTitlePersonalInformation,StyledTitle, Avatar, StyledButton, ButtonGroup, StyledFormArea, ExtraText} from "./../components/Styles";
//react
import React, {Component} from 'react';
//navbar
import Navbar from "./NavBar";
//Logo
import Logo from './../assets/Merkel.png';

const About = () => {
    return (
        <div>
              <Navbar/>
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
          
            <StyledFormArea> 
        <StyledTitle size={65}>
          About us:
            </StyledTitle>
        
               <ExtraText>
               Seam is a comprehensive ID management system designed for large institutions and built around the Hyperledger Fabric framework. 
It provides institutions with a single platform to service their members many needs, such as standard ID management, finance management, and institutional governance.
Our web app takes advantage of permissioned blockchain technology to ensure security and reliable data through the use of a shared ledger system, which enhances and eases the process of auditing data, whether it be for user information, on-chain governance, or financial data.

            </ExtraText>
        </StyledFormArea> 
        </div>
    );
}

export default About;