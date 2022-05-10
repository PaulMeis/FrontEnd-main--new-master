//PersonalInformation.js: page affter login successful
//displalys the entered information for sign up process

//import already created custom styles
import {StyledSubTitlePersonalInformation,StyledTitle, Avatar, StyledButton, ButtonGroup, StyledFormArea, ExtraText} from "./../components/Styles";
//import react components
import React, {Component} from 'react';
//import navbar
import Navbar from "./NavBar";


const PersonalInformation = () => {
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
           Personal Information!
            </StyledTitle>
            <StyledSubTitlePersonalInformation>
                Account Information:
            </StyledSubTitlePersonalInformation>
            <ExtraText>
                First: Angela
            </ExtraText>
            <ExtraText>
                Last: Merkel
             </ExtraText>   
             <ExtraText>
                D.o.B: 08/28/1999
                </ExtraText> 
                <ExtraText>  
                Email: try1@gmail.com
            </ExtraText>
            <ExtraText>  
                
            </ExtraText>
            <ExtraText>  
                
            </ExtraText>
            <StyledSubTitlePersonalInformation> 
                Contact Information:
            </StyledSubTitlePersonalInformation>
            <ExtraText>
                Address: 111 Straße
                </ExtraText>
                <ExtraText>
                Zip: 00000
                </ExtraText>
                <ExtraText>
                State: Wi
                </ExtraText>
                <ExtraText>
                phone: 111 1111 1111
            </ExtraText>
            <ExtraText>  
                
            </ExtraText>
            <ExtraText>  
                
            </ExtraText>
            <StyledSubTitlePersonalInformation> 
                Academic Information:
            </StyledSubTitlePersonalInformation>
            <ExtraText>
             Major: Software Engineering
             </ExtraText>
             <ExtraText>
             Role: Student
             </ExtraText>
             <ExtraText>
             ID: 1
            </ExtraText>
            <ExtraText>  
                
            </ExtraText>
            <ExtraText>  
                
            </ExtraText>
            <StyledSubTitlePersonalInformation> 
                Financial Information:
            </StyledSubTitlePersonalInformation>
            <ExtraText>
             Bank Name: Wells Fargo
             </ExtraText>
             <ExtraText>
             Card Type: Debit
             </ExtraText>
             <ExtraText>
             Card Number: 0000 1111 2222 3333
             </ExtraText>
             <ExtraText>
             CSV: ***
            </ExtraText>
           
     
        </StyledFormArea> 
        </div>
    );
}

export default PersonalInformation;