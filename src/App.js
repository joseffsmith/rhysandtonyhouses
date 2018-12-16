import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import ImageGallery from 'react-image-gallery';
import Leaflet from 'leaflet';
import { Map, CircleMarker, TileLayer } from 'react-leaflet';

Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/';


const color_grey = "#efefef"
const color_red = "#a12a2a"
const color_red_hover = "#ce4141"
const color_white = "#f9f9f9"
const color_dark_green = "#0e3f00"


export default class App extends Component {
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
          'lat': 51.491813, 
          'lng': -3.169616,
          'google_place_id': "EhxHbGVucm95IFN0LCBDYXJkaWZmIENGMjQsIFVLIi4qLAoUChIJ0SWjNsAcbkgR3RVu5ESw8BYSFAoSCamRx0IRO1oCEXoliDJDoPjE"
        }
      },
      {
        'name':'Mackintosh Place',
        'images':require.context("./images/Mackintosh Place", false, /.*\.jpeg$/),
        'images_t':require.context("./images/Mackintosh Place thumbs", false, /.*\.jpg$/),
        'features':[
          "7 double bedrooms",
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
          'lat':51.493712, 
          'lng':-3.172461,
          'google_place_id': "Eh9NYWNLaW50b3NoIFBsLCBDYXJkaWZmIENGMjQsIFVLIi4qLAoUChIJ-yrJHZUcbkgRRRw6sv8W-KsSFAoSCamRx0IRO1oCEXoliDJDoPjE"
        }
      }
    ]
    this.state = {
      current_house: "Glenroy Street",
      current_section: "Info",
    }
  }

  handleClick = e => { 
    var current_house = e.target.innerHTML
    if (this.state.current_house !== current_house)
      this.setState({current_house, current_section: "Info"})
  }

  handleClickLinks = e => {
    var current_section = e.target.innerHTML
    if (this.state.current_section !== current_section)
      this.setState({current_section})
  }

  getHouseInfo = () => {
    return this.HOUSES.find(house => house.name === this.state.current_house)
  }

  render() {
    var houseInfo = this.getHouseInfo()
    return (
      <React.Fragment>
        <NavBar 
          houses={this.HOUSES} 
          current_house={this.state.current_house} 
          handleClick={this.handleClick}
        />
        <Main>

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
        </Main>
      </React.Fragment>
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
  padding-bottom: 50px;
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
  handleHouseClick = (e) => {
    this.props.handleClick(e)
    this.setState(prevState => ({
      navLinksVisible: !prevState.navLinksVisible
    }))
  }
  handleContactClick = (e) => {
    e.preventDefault();
    window.open("mailto:info@eintai.co.uk", "_top");
  }

  render() {
    return (
      <React.Fragment>
        <NavBarStyled>
          <MenuIcon onClick={this.handleMenuClick}>
            ☰
          </MenuIcon>
          <Header>
            EinTai
          </Header>
          <AltButton 
              alignRight={true}
              onClick={this.handleContactClick}>
            Contact
          </AltButton>
        </NavBarStyled>
        <NavLinks 
          visible={this.state.navLinksVisible} 
          current_house={this.props.current_house} 
          houses={this.props.houses} 
          handleHouseClick={this.handleHouseClick}
        />
      </React.Fragment>

    )
  }
}
const NavBarStyled = styled.div`
  background-color:${color_grey};
  padding: 10px;
  line-height: 22px;
  letter-spacing: .5px;


`
const MenuIcon = styled.div`
  display: inline-block;
  font-size: 2.2em;
  padding-left: 9px;
  border-radius: 5px;
  line-height: 30px;
  color: ${color_red};
  cursor: pointer;

  &:hover {
    color: ${color_red_hover};
  }
`
const Header = styled.h1`
  display: inline-block;
  padding: 0px 10px;
  line-height: 30px;
  font-size: 2em;
`


class NavLinks extends Component {

  render() {
    return (
      <NavLinksStyled visible={this.props.visible}> 
      {this.props.houses.map((house,i) => (
        <div key={i}>
          <Button 
            onClick={this.props.handleHouseClick} 
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

const expand = keyframes`
  0% { height: 0px; opacity: 0; }
  20% { height: 60px; }
  30% { height: 70px; }
  40% { height: 90px; }
  50% { height: auto; }
  100% { opacity: 1; }
`

const NavLinksStyled = styled.div`
  margin-bottom: 10px;
  display:none;
  position:absolute;
  background-color:${color_grey};
  border: 1px solid ${color_red};


  ${props => props.visible && css`
    display:block;
    animation: .25s ${expand};
  `}

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
          <ReactMap 
            current_house={this.props.current_house}
            houses={this.props.houses}
          />
        }
      </React.Fragment>
    )
  }
}


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
      <InfoWrapper>
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
      </InfoWrapper>
    )
  }
}

const InfoWrapper = styled.div`
  margin: 0px 10px;
`


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
      <ImageGallery 
        items={images}
        thumbnailPosition={"top"}
        showPlayButton={false}
        showFullscreenButton={false}
        style={{'margin': '0px 10px'}}
      />
    );
  }
}


class ReactMap extends Component {
  constructor(props){
    super(props)
    this.house = this.props.houses.find(house => house.name === this.props.current_house)
  }


  handleMarkerClick = (e) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${this.house.location.lat},${this.house.location.lng}&query_place_id=${this.house.location.google_place_id}`,"_blank")
  }

  render() {
    const coords = [this.house.location.lat, this.house.location.lng]
    return (
      <div className="map">
        <Map 
            style={{ height: '60vh', width: '95%', margin: '0 10px', }} 
            center={coords}
            zoom={15} 
            className="map__reactleaflet">
          <TileLayer
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
          />
          <CircleMarker center={coords} radius={15} onClick={this.handleMarkerClick} />
        </Map>
      </div>
    );
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

  ${props => props.alignRight && css`
    float: right;
  `}
`

const Button = styled.button`
  background: transparent;
  border: 2px solid ${color_red};
  color: ${color_red};
  margin: 10px 10px;
  padding: 0.25em 1em;
  font-size: 1.15em;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${color_red_hover};
    color: ${color_white};
    border-color: ${color_red_hover};
  }

  ${props => props.active && css`
    background: ${color_red};
    color: ${color_white};
  `}
  ${props => props.alignRight && css`
    float: right;
  `}
`
