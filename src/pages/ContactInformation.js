//ContactInformation.js: this page is required for the sign up process
//create page here and export

//styles
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
import { FiHome } from 'react-icons/fi';


const ContactInformation = () => {
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.yellow} size={30}>
                    Required Contact Information
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
                        role: "", 
                        studentID: "",
                        
                        



                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("Invalid email entered!").required("Required"),
                            password: Yup.string().min(8, "Password is too short").max(30, "Password is too long").required("Required"),
                            firstName: Yup.string().required("Required"),
                            lastName: Yup.string().required("Required"),
                            birthdate: Yup.string().required("Required"),
                            confirmEmail: Yup.string().required("Required").oneOf([Yup.ref("email")], "Email MUST match!" ),
                            confirmPassword: Yup.string().required("Required").oneOf([Yup.ref("password")], "Password MUST match!" ),
                            studentID: Yup.string().required("Required"), 
                            role: Yup.string().required("Required"),


                        })
                    }

                    onSubmit={(values, {setSubmitting})=> {
                        console.log(values);
                    }}
                >           
               
                    {() => (
                        <Form>

                            
                            <TextInput
                            name="address"
                            type="text"
                            label="Name of Street"
                            placeholder="720 Talmadge St"
                            icon = {<FiHome/>}
                            />

                            <TextInput
                            name="zipCode"
                            type="text"
                            label="Zip Code"
                            placeholder="12345"
                            icon = {<FiHome/>}
                            />

                            <TextInput
                            name="state"
                            type="text"
                            label="State"
                            placeholder="Wisconsin"
                            icon = {<FiHome/>}
                            />

                            <TextInput
                            name="phone"
                            type="text"
                            label="Phone Number"
                            placeholder="3215478596"
                            icon = {<FiHome/>}
                            />



                            <ButtonGroup>
                               {<StyledFormButton
                                type="submit">Academic Information</StyledFormButton>}
                        
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
export default ContactInformation;