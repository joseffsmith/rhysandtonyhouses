import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  styled, { css } from 'styled-components'


class App extends Component {
  constructor(props){
    super(props)
    this.HOUSES = [
      {
        'name':'Glenroy Street',
        'features':[
          "7 double bedrooms all with built in wardrobes",
          "3 bathrooms + 1 cloakroom",
          "Large kitchen dining room with lounge area including leather suite and TV",
          "Original tiled hallway",
          "Available from 1st Jul 2019",
          "Furnished",
        ],
        'description':`A fantastic 7 bedroom property situated close to the amenities of Albany Road and 
                        City Road, making it perfect for all Cardiff students! This completely refurbished 
                        property boasts a large kitchen with dining room and adjoining lounge with flatscreen TV. 
                        WiFi is already installed and included within the rental. 
                        The property has carpet flooring throughout the bedrooms . 3 x fully equipped bathrooms. 
                        Each bedroom has a double bed, built in wardrobe, desk and additional storage areas.
                        Rent is very competitive at £350 monthly (<£80 per week). Half rent during July/ August
                        No agency fees
                        Please feel free to email for any further questions Available date 01/07/19`,
        'rent': 350,
        'available_date': '01/07/19',
        'bedrooms': 7,
      },
      {
        'name':'Mackintosh Place',
        'features':[
          "7 double bathrooms ",
          "2 bathrooms + 1 cloakroom",
          "Dining room",
          "TV /reception room",
          "Available from 1st Jul 2019",
          "Furnished",
        ],
        'description':`A fantastic 7 bedroom property situated close to the amenities of 
                        Albany Road and City Road, making it perfect for all Cardiff students! 
                        This property boasts a large kitchen with leading to a dining room.
                        In addition there is a large living room with flatscreen TV. 
                        The property consists of laminate and carpet flooring throughout. 
                        2 x fully equipped bathrooms, one brand new in 2018 and the other to 
                        be refurbished in 2019 ,both in a funky green and white! 
                        Each bedroom has a double bed, wardrobe, desk and desk- chair.
                        Rent is very competitive at £350 monthly (<£80 per week). Half rent during July/ August
                        No agency fees
                        Please feel free to email for any further questions Available date 01/07/19`,
        'rent': 350,
        'available_date': '01/07/19',
        'bedrooms': 7,
      }
    ]
    this.state = {
      current_house: "Glenroy Street",
    }
  }

  handleClick = (e) => { 
    var current_house = e.target.innerHTML
    this.setState({current_house})
  }

  getHouseInfo = () => {
    return this.HOUSES.find(house => house.name === this.state.current_house)
  }

  render() {
    var houseInfo = this.getHouseInfo()
    return (
      <React.Fragment>
      <NavBar houses={this.HOUSES} handleClick={this.handleClick}/>
      <House 
        name={this.state.current_house} 
        houses={this.HOUSES} 
        houseDescription={houseInfo.description}
        houseFeatures={houseInfo.features}

      />
      </React.Fragment>
    );
  }
}


class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      navLinksVisible: false,
    }
  }

  handleMenuClick = (e) => {
    this.setState(prevState => ({
      navLinksVisible: !prevState.navLinksVisible
    }))
  }

  handleClick = (e) => {
    this.props.handleClick(e)
    this.setState(prevState => ({
      navLinksVisible: !prevState.navLinksVisible
    }))
  }


  render() {
    return (
      <React.Fragment>
      <NavBarStyled>
        <MenuIcon onClick={this.handleMenuClick}>
        ☰
        </MenuIcon>
        <NavTitle>
        Rhys and Tony houses
        </NavTitle>
      </NavBarStyled>
      <NavLinks visible={this.state.navLinksVisible} houses={this.props.houses} handleClick={this.handleClick}/>
      </React.Fragment>

    )
  }
}

const NavBarStyled = styled.div``
const MenuIcon = styled.div`
  display: inline-block;
  font-size: 2em;
  border-radius: 5px;
  line-height: 30px;


`
const NavTitle = styled.h1`
  display: inline-block;
  padding: 0px 10px;
  line-height: 30px;
`


class NavLinks extends Component {
  constructor(props){
    super(props)

  }


  render() {
    return (
      <NavLinksStyled>
            
      {this.props.visible && this.props.houses.map((house,i) => (
        <Button onClick = {this.props.handleClick} href="#" value={house.name} key={i}>{house.name}</Button>
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
        'name':'Info',
      },
      {
        'href':'#',
        'name':'Pictures',
      },
    ]

    this.state = {
      current_section : 'Info'
    }
  }

  handleClick = (e) => {
    e.stopPropagation()
    var current_section = e.target.innerHTML
    this.setState({current_section})
  }

  render() {
    return (
      <React.Fragment>
      <h2>{this.props.name}</h2>
      <InfoLinks sections={this.HOUSE_LINKS} handleClick={this.handleClick}/>
      {this.state.current_section === "Info" && 
        <Info 
          name={this.props.name}
          houses={this.props.houses}
          section={this.state.current_section}
          text={this.props.houseDescription}
          features={this.props.houseFeatures}/>
      }
      </React.Fragment>
    )
  }
}

const HouseStyled = styled.div``

class InfoLinks extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        {this.props.sections.map((house, j) => (
          <Link key={j} name={house.name} handleClick={this.props.handleClick} />
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
      <Button href="#" key={this.props.Ikey} onClick={this.props.handleClick}>{this.props.name}</Button>
    )
  }
}

class Info extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <React.Fragment>
      <h3> Features </h3>
      <ul>
      {this.props.features.map(feature => (
        <li>{feature}</li>
      ))}
      </ul>
      <h3> Description </h3>
      <p>{this.props.text}</p>
      </React.Fragment>
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