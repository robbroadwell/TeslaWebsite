import styled from 'styled-components';

import mountains from './static/mountains-sunrise.jpg';
import reactLogo from './static/reactLogo.svg';
import nodeLogo from './static/nodeLogo.png';
import mountainRoad from './static/mountain-road.jpg';
import ocean from './static/ocean.jpg';

function Background() {

  const Car = styled.section`
    height: 100vh;
    background-image: url(${props => props.image});
    background-color: ${props => props.color};
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    scroll-snap-align: start;
    scroll-snap-stop: always;
  `;

  return (
    <div>
      <Car image={mountains} id="javascript" />
      <Car id="react">
        <img src={reactLogo} className="App-logo spin" alt="logo" />
      </Car>
      <Car color={"#80bd01"} id="node"> 
        <img src={nodeLogo} className="App-logo" alt="logo" />
      </Car>
      <Car color={"#DEDEDE"} id="express" />
      <Car color={"#CECECE"} id="next" />
      <Car color={"#EFEFEF"} id="react-native" />
      <Car color={"#DEDEDE"} id="swift" />
    </div>
  )
}

export default Background;