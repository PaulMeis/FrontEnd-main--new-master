//Signup.js: ddisplays the registration page

//import already created custom styles
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
//import react components
import React, {Component} from 'react';
//import auth reudx
import { connect } from 'react-redux';
import { signupUser } from "../auth/actions/userActions";
import { useNavigate } from "react-router-dom";
//import formik
import { Form, Formik } from 'formik';
import { TextInput } from "../components/FormLib";
import * as Yup from 'yup';
//  import icons
import { FiMail, FiLock, FiUser, FiCalendar } from 'react-icons/fi';


const Signup = ({signupUser}) => {
    const navigate = useNavigate();
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.yellow} size={30}>
                    User Signup
                </StyledTitle>
                <Formik

                    initialValues={{
                        firstName: "",
                        lastName: "",
                        birthdate: "",
                        email: "",
                        confirmEmail: "",
                        password: "",
                        confirmPassword: "",
                        




                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("Invalid Email! Check Format Above.").required("Required"),
                            password: Yup.string().min(10, "Invalid Password! Check Requirements.").required("Required"),
                            firstName: Yup.string().required("Required"),
                            lastName: Yup.string().required("Required"),
                            birthdate: Yup.string().required("Required"),
                            confirmEmail: Yup.string().required("Required").oneOf([Yup.ref("email")], "Doesn't match!").required("Required"),
                            confirmPassword: Yup.string().required("Required").oneOf([Yup.ref("password")], "Doesn't match!").required("Required"),

                        })
                    }

                    onSubmit={(values, { setSubmitting, setFieldError }) => {
                      signupUser(values, navigate, setFieldError, setSubmitting)
                    }}
                >

                    {() => (
                        <Form>
                            <TextInput
                                name="firstName"
                                type="text"
                                label="First Name"
                                placeholder="Paul"
                                icon={<FiUser />}
                            />

                            <TextInput
                                name="lastName"
                                type="text"
                                label="Last Name"
                                placeholder="Meisner"
                                icon={<FiUser />}
                            />

                            <TextInput

                                name="birthdate"
                                type="date"
                                label="Day of Birth"
                                placeholder="08/28/1999"
                                //"Required Format: MM/DD/YYYY"
                                icon={<FiCalendar />}
                            />

                            <TextInput
                                name="email"
                                type="text"
                                label="Email Address"
                                //Required Format: me@example.com
                                placeholder="me@example.com"
                                icon={<FiMail />}
                            />

                            <TextInput
                                name="repeatEmail"
                                type="text"
                                label="Confirm Email Address" //  Required Format: me@example.com
                                placeholder="me@example.com"
                                icon={<FiMail />}
                            />



                            <TextInput
                                name="password"
                                type="text"
                                label="Password" // Requirements: Exactly 10 characters, 1 Capital letter, 1 Symbol
                                placeholder="****"
                                icon={<FiLock />}
                            />



                            <TextInput
                                name="repeatPassword"
                                type="text"
                                label="Confirm Password" //                             Requirements: Exactly 10 characters, 1 Capital letter, 1 Symbol

                                placeholder="****"
                                icon={<FiLock />}
                            />




                            <ButtonGroup>
                                {<StyledFormButton
                                    type="submit">Contact Information</StyledFormButton>}

                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>

                <ExtraText>
                    Already A User? <TextLink to="/login">Login!</TextLink>
                </ExtraText>

              

            </StyledFormArea>
        </div>
    );
};
export default connect(null, {signupUser}) (Signup);