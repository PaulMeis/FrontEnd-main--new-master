//implement Pages
import Start from "./pages/Start";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AcademicInformation from "./pages/AcademicInformation";
import ContactInformation from "./pages/ContactInformation";
import FinancialInformation from "./pages/FinancialInformation";
import ForgotPassword from "./pages/ForgotPassword";
import VotingStarbucks from "./pages/VotingStarbucks";
import VotingSenate from "./pages/VotingSenate";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import "./App.css";




//styled components
import {StyledContainer} from "./components/Styles";
import React, { Component }  from 'react';

//loader-spinner css
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
//test

//
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Voting from "./pages/VotingStarbucks";
import PersonalInformation from "./pages/PersonalInformation";
import TransactionHistory from "./pages/TransactionHistory";
import VotingStarBucks from "./pages/VotingStarbucks";
import StyledComponents from "styled-components";
import VotingNew from "./pages/VotingNew";
import { Outlet } from 'react-router';



function App() {
  return (



       <StyledContainer className="App">
          <Router>
           <Routes>
                
               
       
                     <Route exact path="dash" element={<Dashboard/>}/>
                     <Route exact path="voteSenate" element={<VotingSenate/>}/>
                     <Route exact path="personal" element={<PersonalInformation/>}/>
                     <Route exact path="transaction" element={<TransactionHistory/>}/>
                     <Route exact path="/voting" element={<VotingNew/>}/>
                     <Route exact path="/voteStarbucks" element={<VotingStarBucks/>}/>
                     <Route exact path="/" element={<Start/>}/>
                     <Route exact path="/signup" element={<Signup/>}/>

               <Route exact path="/login" element={<Login/>}/>
               <Route exact path="/forgotpassword" element={<ForgotPassword/>}/>
               <Route exact path="/contact" element={<ContactInformation/>}/>
               <Route exact path="/financial" element={<FinancialInformation/>}/>
               <Route exact path="/academic" element={<AcademicInformation/>}/>
               <Route exact path="/contactUs" element={<ContactUs/>}/>
               <Route exact path="/about" element={<About/>}/>
            </Routes>
          </Router>
        </StyledContainer>
  
    
  );
}
export default App;