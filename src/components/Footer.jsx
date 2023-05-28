import React, { useEffect } from "react";
import styled from "styled-components";
import { FaInstagram, FaGithub } from 'react-icons/fa';
export default function Footer() {

  return (
    <FooterContainer>
      <Item>
        <FooterText>Andrey Mudri 2023</FooterText>
      </Item>
      <Item>
        <FooterText>
          Contact:
          <span onClick={() => window.location.replace("https://www.instagram.com/andreymudri/")}>
            <FaInstagram style={{ marginLeft: '5px' }}/> 
          </span>
          <span onClick={() => window.location.replace("http://www.github.com/andreymudri/")}>
            <FaGithub style={{ marginLeft: '5px' }}/>
          </span>
        </FooterText>
          </Item>

    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0px;
  left:0px;
  width: 100vw;
  height: px;
  background-color: #1a1a1a;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const FooterText = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  line-height: 25px;
  span {cursor: pointer;}
`;
