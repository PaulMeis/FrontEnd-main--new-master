//TransactionHistory.js: Page displays your transactions made previously
//should be able to make transaction from here

// //import already created custom styles
import {StyledTitle,StyledFormButton, Avatar, ButtonGroup, StyledFormArea, ExtraText, StyledSubTitleTransaction, StyledButton} from "./../components/Styles";
//import react components
import React, {Component} from 'react';
//formik
import {Form, Formik} from 'formik';
import { TextInput } from "../components/FormLib";
//import yup for verification
import * as Yup from 'yup';
//import navbar
import Navbar from "./NavBar";


const data = [
    { from: "Paul Meisner", to: "Nick Spiess", amount: "$0.99", date: "01/22/2022"},
    { from: "Ryan Connor", to: "Nick Spiess", amount: "$100", date: "02/12/2022" },
    { from: "Nick Spiess", to: "Paul Meisner", amount: "$1782", date: "08/15/2022" },

  ]

const TransactionHistory = () => {
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
                    Transaction         
                </StyledTitle>
                <StyledSubTitleTransaction>
                    History:
                </StyledSubTitleTransaction>

                        <table>
                        <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Amount</th>
                        <th>Date</th>
                        </tr>
                        <tr>
                        <td>paul@try.com</td>
                        <td>nick@try.com</td>
                        <td>$0.99</td>
                        <td>01/22/2022</td>
                        </tr>
                        <tr>
                        <td>ryan@try.com</td>
                        <td>nick@try.com</td>
                        <td>$1782</td>
                        <td>08/15/2022</td>
                        </tr>
                        <tr>
                        <td>nick@try.com</td>
                        <td>paul@try.com</td>
                        <td>$100</td>
                        <td>02/12/2022</td>
                        </tr>
                        </table>

                    <ExtraText></ExtraText>
                    <ExtraText></ExtraText>
                    <ExtraText></ExtraText>

                    <StyledSubTitleTransaction>
                        Make Transaction:
                    </StyledSubTitleTransaction>

                        <Formik
                            initialValues={{
                                from: "",
                                cardNumber: "",
                                csv: "",
                                amount: "",
                                to: "",
                                cardNumberTo: "",
                                reason: ""
                            }}
                            validationSchema={
                                Yup.object({
                                    from: Yup.string("Format: First/Last!").required("Required"),
                                    cardNumber: Yup.string().required("Required"),
                                    csv: Yup.string().min(3, "Invalid, must be 3 numbers").max(3, "Invalid, must be 3 number").required("Required"),
                                    amount: Yup.string().required("Required"),
                                    to: Yup.string( "Format: First/Last").required("Required"),
                                    cardNumberTo: Yup.string().required("Required"),
                                    

                                })
                            }

                            onSubmit={(values, {setSubmitting})=> {
                                console.log(values);
                            }}
                            >           

                            {() => (
                                <Form>

                                    
                                    <TextInput
                                    name="from"
                                    type="text"
                                    label="From: Email"
                                    placeholder="paul@try.com"
                                // icon = {<FiHome/>}
                                    />

                                    <TextInput
                                    name="cardNumber"
                                    type="text"
                                    label="Card Number"
                                    placeholder="0000 1111 2222 3333"
                                // icon = {<FiHome/>}
                                    />
                                    <TextInput
                                    name="csv"
                                    type="text"
                                    label="CSV"
                                    placeholder="111"
                                // icon = {<FiHome/>}
                                    />
                                    <TextInput
                                    name="amount"
                                    type="text"
                                    label="Amount"
                                    placeholder="$100"
                                // icon = {<FiHome/>}
                                    />

                                    <TextInput
                                    name="to"
                                    type="text"
                                    label="TO: Email"
                                    placeholder="nick@try.com"
                                //  icon = {<FiHome/>}
                                    />
                                    <TextInput
                                    name="cardNumberTo"
                                    type="text"
                                    label="Card Number Recipient "
                                    placeholder="5555 6666 7777 88888"
                                // icon = {<FiHome/>}
                                    />

                                
                                <TextInput
                                    name="reason"
                                    type="text"
                                    label="Reason/Comment (Optional)"
                                    placeholder="Dinner and Beer"
                                // icon = {<FiHome/>}
                                    />



                                    <ButtonGroup>
                                    {<StyledFormButton
                                        type="submit">Make Transaction</StyledFormButton>}
                                    </ButtonGroup>
                                </Form>
                            )}
                                    </Formik> 
            </StyledFormArea> 
        </div>     
    );
}

export default TransactionHistory;