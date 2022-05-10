//Login.js: Page that includes the login process.
//infformation provided will be required

//already created style components
import {
    StyledFormArea,
    StyledFormButton, 
    Avatar, 
    StyledTitle, 
    colors,
    ButtonGroup,
    TextLink,
    ExtraText
} from "./../components/Styles";
//import logo
import Logo from './../assets/seam.png';
//import react componenets 
import React, {Component} from 'react';
import { useNavigate } from "react-router-dom";


//formik
import {Form, Formik} from 'formik';
import { TextInput } from "../components/FormLib";
import * as Yup from 'yup';
//icons
import {FiMail, FiLock} from 'react-icons/fi';
//auth reudx
import { connect } from 'react-redux';
//useraction
import { loginUser } from "../auth/actions/userActions";
//import recaptcha for twofactor
//import ReCAPTCHA from "react-google-recaptch";


const Login = ({loginUser}) => {
   
    const navigate = useNavigate();

    


    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.yellow} size={30}>
                    User Login
                </StyledTitle>
                <Formik

                    initialValues={{
                        email: "",
                        password: "",

                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("Invalid email entered!").required("Required"),
                            password: Yup.string().min(10, "Invalid!").required("Required"),
                        })
                    }
                    onSubmit={(values, {setSubmitting, setFieldError})=> {
                        console.log(values);
                        loginUser(values, navigate, setFieldError, setSubmitting);
                    }}
                >           
               
                    {() => (
                        <Form>
                            <TextInput 
                            name="email"
                            type="text"
                            label="Email Address"
                            placeholder="me@example.com"
                            icon = {<FiMail/>}
                            />

                            <TextInput
                            name="password"
                            type="text"
                            label="Password"
                            placeholder="****"
                            icon = {<FiLock/>}
                            />


                            <ButtonGroup>
                               {<StyledFormButton
                                type="submit">Login</StyledFormButton>}
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>

                <ExtraText>
                    New User? <TextLink to="/signup">Register Here!</TextLink>
                </ExtraText>
                <ExtraText>
                    Forgot Password? <TextLink to="/forgotPassword">Reset Password!</TextLink>
                </ExtraText>
            

            </StyledFormArea>
        </div>
    );
    };
export default connect (null,{loginUser} ) (Login);