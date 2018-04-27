import React, { Component } from 'react';
import styled from 'styled-components';

import Wrapper from './components/Wrapper';

const CustomTitle = styled.h1`
    color: darkviolet;
    font-size: 90px;
    text-align: center;
    font: "Calibri";
`
const Header = styled.section`
  background-color: #f4f4f4;
  width: 100%;
  box-sizing: border-box;
  margin: 10px;
`

const Button = styled.button`
  background-color: pink;
  width: 250px;
  height: 75px;
  padding: 10px;
  font-size: 30px;
  border: solid 3px darkturquoise;
  color: white;
  position: relative;
  left: 20%;
  box-sizing: border-box;
  text-align: center;
`
const LoremText = styled.p`
  color: #000;
  text-align: left;
  padding-left: 10%;
  &:hover{
    background-color: yellow;
    width: 300px;
    color: blue;
  }
`

class App extends Component {
  render() {
    console.log('this.props', this.props)
    return (
      <Wrapper>
        <Header>
          <CustomTitle>My custom title</CustomTitle>
          <LoremText>Lorem ipsum dolor sit amet</LoremText>
          <br />
          <Button>Click Bait ;)</Button>
          <h4>To Add to this project:</h4>
          <list>
            <p>Functioning To Do List</p>
            <p>React Toggle Button</p>
          </list>
        </Header>
      </Wrapper>
    );
  }
}

export default App;
