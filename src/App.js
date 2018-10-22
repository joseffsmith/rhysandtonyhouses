import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  styled, { css } from 'styled-components'


class App extends Component {
  constructor(props){
    super(props)
    this.HOUSES = [
      {
        'name':'Glenroy Street'
      },
      {
        'name':'Mackintosh Place'
      }
    ]
    this.state = {
      current_house: "Glenroy Street"
    }
  }

  handleClick = (e) => { 
    var current_house = e.target.innerHTML
    this.setState({current_house})
  }
  render() {
    return (
      <React.Fragment>
      <NavBar houses={this.HOUSES} handleClick={this.handleClick}/>
      <House name={this.state.current_house} />
      </React.Fragment>
    );
  }
}


class NavBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <React.Fragment>
      <NavBarStyled>
        <MenuIcon>
        ☰
        </MenuIcon>
        <NavTitle>
        Rhys and Tony houses
        </NavTitle>
      </NavBarStyled>
      <NavLinks houses={this.props.houses} handleClick={this.props.handleClick}/>
      </React.Fragment>

    )
  }
}

const NavBarStyled = styled.div``
const MenuIcon = styled.div``
const NavTitle = styled.div``


class NavLinks extends Component {
  constructor(props){
    super(props)

  }


  render() {
    console.log(this.props)
    return (
      <NavLinksStyled>
      {this.props.houses.map((house,i) => (
        <a onClick = {this.props.handleClick} href="#" value={house.name} key={i}> {house.name} </a>
        ))}
      </NavLinksStyled>
    )
  }
}

const NavLinksStyled = styled.div``



class House extends Component {
  constructor(props) {
    super(props)
    this.HOUSE_LINKS = [
      {
        'href':'#',
        'name':'About',
      },
      {
        'href':'#',
        'name':'Info',
      },
      {
        'href':'#',
        'name':'Pictures',
      },
    ]

    this.state = {
      current_section : 'About'
    }
  }

  handleClick = (e) => {
    var current_section = e.target.innerHTML
  }

  render() {
    return (
      <React.Fragment>
      <p>{this.props.name}</p>
      <InfoLinks sections={this.HOUSE_LINKS} handleClick={this.handleClick}/>
      </React.Fragment>
    )
  }
}

const HouseStyled = styled.a``

class InfoLinks extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <React.Fragment>
        {this.props.sections.map((house, j) => (
          <Link Ikey={j} name={house.name} handleClick={this.props.handleClick} />
        ))}
      </React.Fragment>
    )
  }
}

class Link extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href="#" key={this.props.Ikey} onClick={this.props.handleClick}> {this.props.name} </a>
    )
  }
}





const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`

export default App;