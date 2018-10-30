import React, { Component } from 'react';
import './App.css';
import  styled, { css } from 'styled-components';
import ImageGallery from 'react-image-gallery';
import { Map, TileLayer, Marker, Popup } from 'leaflet'

const color_grey = "#efefef"
const color_red = "#a12a2a"
const color_white = "#f9f9f9"
const color_dark_green = "#0e3f00"


class App extends Component {
  constructor(props){
    super(props)
    this.HOUSES = [
      {
        'name':'Glenroy Street',
        'images':require.context("./images/Glenroy Street", false, /.*\.jpeg$/),
        'images_t':require.context("./images/Glenroy Street thumbs", false, /.*\.jpg$/),
        'features':[
          "7 double bedrooms all with built in wardrobes",
          "3 bathrooms + 1 cloakroom",
          "Large kitchen dining room with lounge area including leather suite and TV",
          "Original tiled hallway",
          "Available from 1st Jul 2019",
          "Furnished",
        ],
        'description':`A fantastic 7 bedroom property situated close to the amenities of Albany Road and 
                        City Road, making it perfect for all Cardiff students!
                        This completely refurbished property boasts a large kitchen with dining room 
                        and adjoining lounge with flatscreen TV.
                        WiFi is already installed and included within the rental.
                        The property has carpet flooring throughout the bedrooms and 3 fully equipped bathrooms. 
                        Each bedroom has a double bed, built in wardrobe, desk and additional storage areas.
                        Rent is very competitive at £350 monthly (<£80 per week). 
                        Half rent during July/ August.
                        No agency fees.
                        Please feel free to email for any further questions.
                        Available date 01/07/19.`,
        'rent': 350,
        'available_date': '01/07/19',
        'bedrooms': 7,
        'location': {
          'lat': 51.4922,
          'lng':-3.168221
        }
      },
      {
        'name':'Mackintosh Place',
        'images':require.context("./images/Mackintosh Place", false, /.*\.jpeg$/),
        'images_t':require.context("./images/Mackintosh Place thumbs", false, /.*\.jpg$/),
        'features':[
          "7 double bathrooms ",
          "2 bathrooms + 1 cloakroom",
          "Dining room",
          "TV/reception room",
          "Available from 1st Jul 2019",
          "Furnished",
        ],
        'description':`A fantastic 7 bedroom property situated close to the amenities of 
                        Albany Road and City Road, making it perfect for all Cardiff students! 
                        This property boasts a large kitchen leading to a dining room.
                        In addition there is a large living room with flatscreen TV. 
                        The property consists of laminate and carpet flooring throughout. 
                        2 fully equipped bathrooms, one brand new in 2018 and the other to 
                        be refurbished in 2019, both in a funky green and white! 
                        Each bedroom has a double bed, wardrobe, desk and desk chair.
                        Rent is very competitive at £350 monthly (<£80 per week). 
                        Half rent during July/August.
                        No agency fees
                        Please feel free to email for any further questions.
                        Available date 01/07/19`,
        'rent': 350,
        'available_date': '01/07/19',
        'bedrooms': 7,
        'location': {
          'lat':51.495,
          'lng':-3.173
        }
      }
    ]
    this.state = {
      current_house: "Glenroy Street",
      current_section: "Info",
    }
  }

  handleClick = (e) => { 
    var current_house = e.target.innerHTML
    if (this.state.current_house !== current_house)
      this.setState({current_house, current_section: "Info"})
  }

  handleClickLinks = (e) => {
    var current_section = e.target.innerHTML
    if (this.state.current_section !== current_section)
      this.setState({current_section})
  }

  handleContactClick = (e) => {
    this.setState({current_house: null})
  }

  getHouseInfo = () => {
    return this.HOUSES.find(house => house.name === this.state.current_house)
  }

  render() {
    var houseInfo = this.getHouseInfo()
    return (
      <Main>
        <NavBar 
          houses={this.HOUSES} 
          current_house={this.state.current_house} 
          handleClick={this.handleClick}
          handleContactClick={this.handleContactClick}
        />
        {this.state.current_house && 
          <House
            name={this.state.current_house} 
            houses={this.HOUSES} 
            houseDescription={houseInfo.description}
            houseFeatures={houseInfo.features}
            handleClickLinks={this.handleClickLinks}
            current_section={this.state.current_section}
            current_house={this.state.current_house}
          />
        }
        {this.state.current_house === null &&
          <ContactForm 
            houses={this.HOUSES}
          />
        }
      </Main>
    );
  }
}

const Main = styled.div`
  max-width:600px;
  margin:0 auto;
  line-height: 22px;
  letter-spacing: .5px;
  font-size: .85em;
  padding: 10px;
  height: 100%;
  background-color: white;
  padding-bottom: 150px;
`


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
          <Header>
            Rhys and Tony houses
          </Header>
          <AltButton alignRight={true} onClick={this.props.handleContactClick}>
            Contact
          </AltButton>
        </NavBarStyled>
        <NavLinks 
          visible={this.state.navLinksVisible} 
          current_house={this.props.current_house} 
          houses={this.props.houses} 
          handleClick={this.handleClick}
        />
      </React.Fragment>

    )
  }
}
const NavBarStyled = styled.div`
  background-color:${color_grey};
  padding: 10px;
`
const MenuIcon = styled.div`
  display: inline-block;
  font-size: 2em;
  border-radius: 5px;
  line-height: 30px;
  color: ${color_red};
  cursor: pointer;
`
const Header = styled.h1`
  display: inline-block;
  padding: 0px 10px;
  line-height: 30px;
  font-size: 1.5em;
`


class NavLinks extends Component {

  render() {
    return (
      <NavLinksStyled> 
      {this.props.visible && this.props.houses.map((house,i) => (
        <div key={i}>
          <Button 
            onClick={this.props.handleClick} 
            href="#" 
            active={this.props.current_house===house.name} 
            value={house.name} 

            >
              {house.name}
          </Button>
        </div>
        ))}
      </NavLinksStyled>
    )
  }
}

const NavLinksStyled = styled.div`
  margin-bottom: 10px;
  display:block;
  position:absolute;
  background-color:${color_grey};

`


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
      {
        'href':'#',
        'name':'Location',
      }
    ]
  }

  render() {
    return (
      <React.Fragment>

        <Header>{this.props.name}</Header>
        <AboutLinks 
          sections={this.HOUSE_LINKS} 
          handleClick={this.props.handleClickLinks} 
          current_section={this.props.current_section}
        />
        
        {this.props.current_section === "Info" && 
          <Info 
            name={this.props.name}
            houses={this.props.houses}
            section={this.props.current_section}
            text={this.props.houseDescription}
            features={this.props.houseFeatures}/>
        }
        {this.props.current_section === "Pictures" &&
          <Pictures
            name={this.props.name}
            houses={this.props.houses}/>
        }
        {this.props.current_section === "Location" &&
          <Location 
            current_house={this.props.current_house}
            houses={this.props.houses}
          />
        }
      </React.Fragment>
    )
  }
}


class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_house: "Glenroy Street"
    }
  }

  handleClick = (e) => {
    this.setState({current_house: e.target.innerHTML})
  }

  render() {
    return(
      <ContactFormStyled>
        <form action={"mailto:joseffsmith@icloud.com?Subject="+this.state.current_house}
            method="get"
            encType="text/plain"
          >
          <Label htmlFor="house_choice">
            House choice
          </Label>
          <CustomSelect 
            houses={this.props.houses}
            current_house={this.state.current_house}
            handleHouseClick={this.handleClick}/>
          <Label htmlFor="name">
            Your name
          </Label>
          <Input name="name" type="text"/>
          <Label htmlFor="email">
            Your email
          </Label>
          <Input name="email" type="email"/>
          <Label htmlFor="message">
            Message
          </Label>
          <Textarea name="message" type="textarea" rows="4" cols="60"/>
          <Submit type="submit" value="Send"/>
        </form>
      </ContactFormStyled>
    )
  }
}

const ContactFormStyled = styled.div`
  width: 300px;
`

const Input = styled.input`
  display:block;
  width: 95%;

  color: ${color_red};
  margin-right: -0.5em;
  padding: 0.25em 0em .25em 1em;
  font-size: 1.15em;

  -webkit-appearance: none;
  border:none;
  border-bottom: 2px solid ${color_red};
  line-height: 26px;

  &:focus {
    outline:none;
  }
`

const Textarea = styled.textarea`
  display:block;
  width: 95%;

  color: ${color_red};
  margin-right: -0.5em;
  padding: 0.25em 0em .25em 1em;
  font-size: 1.15em;

  -webkit-appearance: none;
  border:none;
  border-bottom: 2px solid ${color_red};
  line-height: 26px;

  &:focus {
    outline:none;
  }
`
const Label = styled.label`
  display:block;
  padding-top: 15px;
`

const Submit = styled.input`
  background: transparent;

  border: 2px solid ${color_dark_green};
  color: ${color_dark_green};
  margin: .4em .5em;
  padding: 0.25em 1em;
  font-size: 1.15em;
  cursor: pointer;
  float:right;

  &:focus {
    outline: none;
  }

  &:hover {
    background: ${color_dark_green};
    color: ${color_white};
  }
`

class CustomSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdown_visibile: false,
    }
  }

  handleClick = (e) => {
    if (this.state.dropdown_visibile) {
      this.setState({dropdown_visibile:false})
    }
    else {
      this.setState({dropdown_visibile: true})
    }
  }

  handleClickSelection = (e) => {
    this.setState({
      dropdown_visibile: false,
    })
    this.props.handleHouseClick(e)
  }

  render(){
    return(
      <SelectWrap>
        <CurrentSelection onClick={this.handleClick}>
          {this.props.current_house}
        </CurrentSelection>
        {this.state.dropdown_visibile &&
          <Dropdown >
            {this.props.houses.map((house, i) => (
              <Selection 
                  key={i} 
                  value={house.name}
                  onClick={this.handleClickSelection}>
                {house.name}
              </Selection>
            ))}
          </Dropdown>}
      </SelectWrap>
    )
  }
}
const SelectWrap = styled.div`
  cursor: pointer;
`
const CurrentSelection = styled.div`
  background: transparent;
  border: 2px solid ${color_red};
  color: ${color_red};
  margin: 0;
  padding: 0.25em 1em;
  font-size: 1.15em;
  
`
const Dropdown = styled.div`
  position: absolute;
  background-color: white;
  border: 2px solid ${color_red};
  border-top: 0px;
  color: ${color_red};
  margin: 0;
  font-size: 1.15em;

`
const Selection = styled.div`
  width:265px;
  padding: 0.25em 1em;
  &:hover {
    background: ${color_red};
    color: ${color_white};
  }

  
`
class AboutLinks extends Component {

  render() {
    return (
      <AboutLinksStyled>
        {this.props.sections.map((section, j) => (
          <Button 
            href="#" 
            key={j} 
            active={this.props.current_section===section.name} 
            onClick={this.props.handleClick}>
              {section.name}
            </Button>
        ))}
      </AboutLinksStyled>
    )
  }
}

const AboutLinksStyled = styled.div`
  margin-bottom: 20px;
`

class Info extends Component {

  renderDescription(text_string) {
    return text_string.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
  }

  render() {
    var text_array = this.renderDescription(this.props.text)
    return(
      <React.Fragment>
        <h3> Features </h3>
        <ul>
          {this.props.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
        <h3> Description </h3>
        {text_array.map((text, i) => (
          <p key={i} >{text}</p>
        ))}
      </React.Fragment>
    )
  }
}


class Pictures extends Component {

  render() {
    let house_images = this.props.houses.find(house => house.name === this.props.name).images;
    let house_thumbs = this.props.houses.find(house => house.name === this.props.name).images_t;
    let house_images_mapped = house_images.keys().map(key => (
        house_images(key)
      ))
    let house_thumbs_mapped = house_thumbs.keys().map(key => (
        house_thumbs(key)
      ))

    let images = house_images_mapped.map((image, i) => (
        {
          original: image,
          thumbnail: house_thumbs_mapped[i]
        }
    ))
    return (
      <PicturesStyled>
        <ImageGallery 
          items={images}
          lazyLoad={true}
          thumbnailPosition={"top"}
          showPlayButton={false}
          showFullscreenButton={false}

        />
      </PicturesStyled>
    );
  }
}

const PicturesStyled = styled.div`
  max-height:50vh;
`

class Location extends Component {
  render() {
    const house = this.props.houses.find(house => house.name === this.props.current_house)
    const location = [house.location.lat, house.location.lng]
    return (
      <div>
        <Map center={location} zoom={12}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={location}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  }
}



const AltButton = styled.button`
  background: transparent;

  border: 2px solid ${color_dark_green};
  color: ${color_dark_green};
  margin: .4em .5em;
  padding: 0.25em 1em;
  font-size: 1.15em;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background: ${color_dark_green};
    color: ${color_white};
  }

  @media (max-width: 460px){
    float: none;
    margin: 0em;
    display: block;
  }

  ${props => props.alignRight && css`
    float: right;
  `}
`


const Button = styled.button`
  background: transparent;
  border: 2px solid ${color_red};
  color: ${color_red};
  margin: .4em .5em;
  padding: 0.25em 1em;
  font-size: 1.15em;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background: ${color_red};
    color: ${color_white};
  }

  ${props => props.align}

  ${props => props.active && css`
    background: ${color_red};
    color: ${color_white};
    cursor: default;
  `}
  ${props => props.alignRight && css`
    float: right;
  `}

`

export default App;