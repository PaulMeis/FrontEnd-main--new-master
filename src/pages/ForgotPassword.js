//ForgotPassword.js: part of login process, not mandatory

//already created stlyes
import {
    StyledFormArea,
    StyledFormButton, 
    Avatar, 
    StyledTitle, 
    colors,
    ButtonGroup,
    ExtraText,
    TextLink,
    
} from "./../components/Styles";

//logo
import Logo from './../assets/seam.png';
//react
import React, {Component} from 'react';

//formik
import {Form, Formik} from 'formik';
import { TextInput } from "../components/FormLib";
import * as Yup from 'yup';

//icons
import {FiMail} from 'react-icons/fi';




const ForgotPassword = () => {
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.yellow} size={30}>
                    Password Reset
                </StyledTitle>
                <Formik

                    initialValues={{
                        email: "",
                        redirect: "http://localhost:3000/passwordreset"

                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("Invalid email entered!").required("Required"),
                        })
                    }

                    onSubmit={(values, {setSubmitting})=> {
                        console.log(values);
                    }}
                >           
               
                    {() => (
                        <Form>
                            <TextInput 
                            name="email"
                            type="text"
                            label="Confirm Your Email Address"
                            placeholder="me@example.com"
                            icon = {<FiMail/>}
                            />



                            <ButtonGroup>
                               {<StyledFormButton
                                type="submit">Submit</StyledFormButton>}
                        
                            </ButtonGroup>
                        </Form>
                    )}

                    
                </Formik>

                <ExtraText>

                </ExtraText>
                    <TextLink to="/login">Login here!</TextLink>
             
            


            </StyledFormArea>
        </div>
    );
    };
export default ForgotPassword;