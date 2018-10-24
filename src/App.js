import React, { Component } from 'react';
import './App.css';
import  styled, { css } from 'styled-components';
import ImageGallery from 'react-image-gallery';

const color_grey = "#efefef"
const color_red = "#a12a2a"
const color_white = "#f9f9f9"


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
      }
    ]
    this.state = {
      current_house: "Glenroy Street",
      current_section: "Info",
    }
  }

  handleClick = (e) => { 
    var current_house = e.target.innerHTML
    this.setState({current_house, current_section: "Info"})
  }

  handleClickLinks = (e) => {
    var current_section = e.target.innerHTML
    this.setState({current_section})
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
        />
        <House
          name={this.state.current_house} 
          houses={this.HOUSES} 
          houseDescription={houseInfo.description}
          houseFeatures={houseInfo.features}
          handleClickLinks={this.handleClickLinks}
          current_section={this.state.current_section}
        />
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
          <NavTitle>
          Rhys and Tony houses
          </NavTitle>
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
const NavTitle = styled.h1`
  display: inline-block;
  padding: 0px 10px;
  line-height: 30px;
  font-size: 1.65em;
`


class NavLinks extends Component {

  render() {
    return (
      <NavLinksStyled> 
      {this.props.visible && this.props.houses.map((house,i) => (
        <div>
          <Button 
            onClick={this.props.handleClick} 
            href="#" 
            active={this.props.current_house===house.name} 
            value={house.name} 
            key={i}
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
    console.log(this.props)
    return (
      <React.Fragment>

        <h2>{this.props.name}</h2>
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
      </React.Fragment>
    )
  }
}


class AboutLinks extends Component {

  render() {
    return (
      <AboutLinksStyled>
        {this.props.sections.map((section, j) => (
          <Button href="#" key={j} active={this.props.current_section===section.name} onClick={this.props.handleClick}>{section.name}</Button>
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
      <ImageGallery 
        items={images}
        lazyLoad={true}
        thumbnailPosition={"top"}
        showPlayButton={false}
        showFullscreenButton={false}

      />
    );
  }

}

const PictureFrame = styled.div`
  white-space: nowrap;
  overflow-x: auto;
  background: ${color_grey};
  -webkit-overflow-scrolling: touch;
`
const Picture = styled.img`
  display: inline-block;
  vertical-align: middle;
  margin: 10px;
  width: 100%;
`




const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${color_red};
  color: ${color_red};
  margin: .4em .5em;
  padding: 0.25em 1em;
  font-size: 1.15em;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  ${props => props.active && css`
    background: ${color_red};
    color: ${color_white};
    cursor: default;
  `}

`

export default App;