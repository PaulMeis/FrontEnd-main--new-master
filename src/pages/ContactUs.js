//ContactUs.js: create and export page here
//page is part of navbar

//previous created styles
import {StyledSubTitlePersonalInformation,StyledTitle, Avatar, StyledButton, ButtonGroup, StyledFormArea, ExtraText} from "./../components/Styles";
//react
import React, {Component} from 'react';
//navbar
import Navbar from "./NavBar";


const ContactUs = () => {
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
            <Navbar/>
            <StyledFormArea> 
        <StyledTitle size={65}>
           How to conact us:
            </StyledTitle>
           
           <StyledSubTitlePersonalInformation>
               Phone:
               <ExtraText>
                 000 000 0000
            </ExtraText>
           </StyledSubTitlePersonalInformation>
            
           <StyledSubTitlePersonalInformation>
               Email:
               <ExtraText>
                 Seam@support.com
            </ExtraText>
           </StyledSubTitlePersonalInformation>
           
           
            
        
        </StyledFormArea> 
        </div>
    );
}

export default ContactUs;