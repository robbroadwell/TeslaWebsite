import React, { useState } from 'react';
import { openPopupWidget } from "react-calendly";
import Header from './components/Header';
import styled from 'styled-components';
import arrowImage from './static/down-white.svg';

const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`  
  opacity: ${props => props.opacity};
  font-weight: 500;
  font-size: 40px;
  color: ${props => props.color};
  margin: 0;
`;

const TitleDictionary = [
  "FULL-STACK JAVASCRIPT DEVELOPER",
  "",
  "",
  "EXPRESS",
  "NEXT.JS",
  "REACT NATIVE",
  "SWIFT",
  "CONSULTATION"
]

const Subtitle = styled.h4`
  opacity: ${props => props.opacity};
  font-family: 'Gotham Book';
  font-weight: 400;
  font-size: 14px;
  color: #5c5e62;
`;

const SubtitleDictionary = [
  "",
  "",
  "",
  "Minimal web application framework.",
  "Server-side rendering.",
  "Learn once, write anywhere.",
  "Native iOS modules."
]

const Arrow = styled.div`
  background-image: url(${arrowImage});
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: contain;
  width: 24px;
  height: 24px;
  margin-bottom: 30px;
  display: ${props => props.visible ? 'block' : 'none'};
  opacity: ${props => props.opacity};
`;

const ButtonWrapper = styled.div`
  display: ${props => props.visible ? 'flex' : 'none'};
  flex-direction: row;
  margin: 17px;
`;

const Button = styled.a`
  background-color: ${props => props.primary ? '#171a20' : '#FFFFFF'};
  color: ${props => props.primary ? '#FFFFFF' : '#171a20'};
  opacity: ${props => props.opacity};
  margin: 10px;
  cursor: pointer;
  padding: 12px;
  font-size: 13px;
  width: 230px;
  border-radius: 20px;
  border-color: #171a20;
  border-width: 2px;
  border-style: solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  display: ${props => props.visible ? 'flex' : 'none'};
  opacity: ${props => props.opacity};
`;

const CenterWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const Link = styled.a`
  font-family: 'Gotham Book';
  font-weight: 400;
  font-size: 13px;
  font-weight: 100;
  color: black;
  text-decoration: none;
  cursor: pointer;
  color: #5c5e62;
  margin: 5px 0;
  cursor: pointer;
  padding: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CalendlyButton = ({ opacity, url, prefill, pageSettings, utm }) => {
  const onClick = () => {
    openPopupWidget({ url, prefill, pageSettings, utm });
  }
  return <Button opacity={opacity} onClick={onClick}>CONSULTATION</Button>;
};

function Foreground() {
  const [alpha, setAlpha] = useState(1);
  const offsetScroll = Math.max(0, window.scrollY + (window.innerHeight * 0.5));
  const cardNumber = Math.floor(offsetScroll / window.innerHeight);
  
  const title = TitleDictionary[cardNumber];
  const subtitle = SubtitleDictionary[cardNumber];

  window.onscroll = () => {
    let transitionDistance = 200
    let distanceY = Math.abs(window.scrollY % window.innerHeight)

    if (distanceY < transitionDistance) {
      let alpha = 1 - (distanceY / transitionDistance);
      setAlpha(alpha);

    } else if (distanceY > (window.innerHeight - transitionDistance)) {
      let distance = distanceY - (window.innerHeight - transitionDistance);
      let alpha = distance / transitionDistance;
      setAlpha(alpha);

    } else {
      setAlpha(0);
    }
  }

  return (
    <Wrapper>
      <Header />
      <TitleWrapper>
        <Title opacity={alpha} color={cardNumber == 0 ? '#FFFFFF' : '#000000'}>{title}</Title>
        <Subtitle opacity={alpha}>{subtitle}</Subtitle>
      </TitleWrapper>
      <ButtonWrapper visible={cardNumber !== 0}>
        <Button opacity={Math.min(alpha, 0.9)} primary>PORTFOLIO</Button>
        <CalendlyButton opacity={Math.min(alpha, 0.9)} url={'https://calendly.com/rob-broadwell/free-consultation'} >CONSULTATION</CalendlyButton>
      </ButtonWrapper>
      <Arrow opacity={alpha} visible={cardNumber == 0} className={"tds-animate--bounce"} />
      <Footer opacity={cardNumber == 6 ? alpha : 0} visible={cardNumber !== 0}>
        <CenterWrapper>
          <Link>Rob Broadwell © 2021</Link>
          <Link target={'_blank'} href={'https://www.linkedin.com/in/robbroadwell8/'}>Linkedin</Link>
          <Link target={'_blank'} href={'https://github.com/robbroadwell'}>Github</Link>
          <Link>Privacy & Legal</Link>
        </CenterWrapper>
      </Footer>
    </Wrapper>
  );
}

export default Foreground;