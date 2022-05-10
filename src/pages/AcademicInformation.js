//AcademicInformation.js: this page is required for the sign up process
//create page here and export

//previous created styles
import {
    StyledFormArea,
    StyledFormButton, 
    Avatar, 
    StyledTitle, 
    colors,
    ButtonGroup,  
    StyledDropdown,
    ExtraText,
    TextLink
} from "./../components/Styles";
//logo
import Logo from './../assets/seam.png';
//react
import React, {Component,} from 'react';
//formik
import {Form, Formik} from 'formik';
import { TextInput } from "../components/FormLib";
import * as Yup from 'yup';




//const [role, setRole] = useState("");

const AcademicInformation = () => {
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.yellow} size={30}>
                    Required Academic Information!
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
                        //display requirements
                        role: "", 
                        studentID: "",
                        
                        //display roles



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
                            name="major"
                            type="text"
                            label="Major"
                            placeholder="Software Engeenering"
                          
                            />

                <ExtraText>Role</ExtraText>
                <StyledDropdown
              
                
                    //onChange={(value) => setRole(value.target.value)}
                  >
                    <option></option>
                    <option>Student</option>
                    <option>Faculty</option>
                 
                  </StyledDropdown>


                         
                         
                          

                            <TextInput
                            name="id"
                            type="text"
                            label="Student ID"
                            placeholder="****"
                    
                            />

    


                            <ButtonGroup>
                               {<StyledFormButton
                                type="submit">Financial Information</StyledFormButton>}
                        
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
export default AcademicInformation;