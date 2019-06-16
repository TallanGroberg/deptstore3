import React from 'react';
import { Container, Header, } from "semantic-ui-react"
import { Route, Switch, } from "react-router-dom";
import styled from 'styled-components';
import './App.css'

import Home from './component/Home';
import About from './component/About'
import Navbar from './component/Navbar'

import Departments from "./component/Departments";



const App = () => (

      <>
          <Navbar />
          <StyledContainer>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/departments" component={Departments} />
        </Switch>
      </StyledContainer>



      </>
    )

    const StyledContainer = styled.div`
    text-align: center;
    height: relative;
    margin-left: 25px;
    background: linear-gradient(to bottom right, rgb(62, 129, 131), rgb(167, 237, 255));
    border-style: inset;
    box-shadow: 10px 10px 5px grey;
`;



export default App;
