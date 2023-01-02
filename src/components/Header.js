import React, { useState } from 'react';
import styled from 'styled-components';
import emailImage from '../static/email.svg';
import { openPopupWidget } from "react-calendly";

function Header() {
  const [rightMenuVisible, setRightMenuVisible] = useState(true);
  
  const Logo = styled.a`
    font-size: 1em;
    color: black;
    color: black;
    text-decoration: none;
  `;

  const FixedWrapper = styled.div`
    padding: 20px;
    flex-direction: row;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
` ;

  const Left = styled.div`
    position: absolute;
    left: 0;
    padding: 0 20px;
  `;

  const Right = styled.div`
    position: absolute;
    right: 0;
    padding: 0 20px;
    display: ${props => props.visible ? 'flex' : 'none'};
    flex-direction: row;
  `;

  const CenterWrapper = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  `;

  const Link = styled.a`
    font-size: 15px;
    padding: 0 9px;
    color: black;
    text-decoration: none;
    display: flex;
    cursor: pointer;
  `;

  const EmailIcon = styled.div`
    background-image: url(${emailImage});
    width: 22px;
    height: 20px;
    margin-top: -6px;
  `;

  const CalendlyButton = ({ url, prefill, pageSettings, utm }) => {
    const onClick = () => {
      openPopupWidget({ url, prefill, pageSettings, utm });
      setRightMenuVisible(false);
    }
    return <Link onClick={onClick}>CONSULTATION</Link>;
  };

  return (
    <FixedWrapper>
      <Left>
        <Logo href="/">ROBERTO</Logo>
      </Left>

      <CenterWrapper>
        <Link href="/react">REACT</Link>
        <Link href="/node">NODE</Link>
        <Link href="/express">EXPRESS</Link>
        <Link href="/next-js">NEXT.JS</Link>
        <Link href="/react-native">REACT NATIVE</Link>
        <Link href="/swift">SWIFT</Link>
      </CenterWrapper>

      <Right visible={rightMenuVisible}>
        <CalendlyButton url={'https://calendly.com/rob-broadwell/free-consultation'} />
        <Link href="mailto:hello@robbroadwell.com">
          <EmailIcon />
        </Link>
      </Right>
    </FixedWrapper>
  );
}

export default Header;