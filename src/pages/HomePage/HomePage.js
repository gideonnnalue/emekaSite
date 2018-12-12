import React, { Component } from 'react';
import Auxs from '../../hoc/Auxs/Auxs';
import TopLandingPage from '../../components/HomePage/TopLandingPage/TopLandingPage';
import HowWeWork from '../../components/HomePage/HowWeWork/howWeWork';
import AboutUs from '../../components/HomePage/AboutUs/AboutUs';
import AboutMinning from '../../components/HomePage/AboutMining/AboutMinning';
import OurAwesomePlan from '../../components/HomePage/OurAwesomePlans/OurAwesomePlan';
import LatestTransactions from '../../components/HomePage/LatestTransactions/LatestTransaction';
import Particles from 'react-particles-js';


const particlesOptions = {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

class HomePage extends Component {

    onLoginHandler = () => {
      this.props.history.push('/login');
    }

    onSignupHandler = () => {
      this.props.history.push('/signup');
    }

    render () {

        return (
            <Auxs >
                
                <TopLandingPage login={() => this.onLoginHandler()} signup={() => this.onSignupHandler()}/>
                <HowWeWork />
                <AboutUs />
                <AboutMinning />
                <OurAwesomePlan />
                <LatestTransactions />
            </Auxs>
        )
    }
}

export default HomePage;