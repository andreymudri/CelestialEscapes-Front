import React from "react";
import styled from "styled-components";
import { AiFillHome, AiFillCustomerService } from "react-icons/ai";
import { IoAirplane, IoHome } from "react-icons/io5";
import iconeLogo from "../assets/northernLights.png";

export default function Header() {
  return (
    <HeaderContainer>
          <Title><img src={iconeLogo} alt="Icon"/>Celestial Escapes</Title>
      <Menu>
        <MenuItem>
          <IoAirplane />
          Flights
        </MenuItem>
        <MenuItem>
          <AiFillHome />
          Hotels
        </MenuItem>
      </Menu>
      <Support>

        <MenuItem>
          <IoHome />
          Login
        </MenuItem>
              <MenuItem>Register</MenuItem>
              <MenuItem>
          <AiFillCustomerService />
          Support
        </MenuItem>
      </Support>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  height: 7%;
  max-height: 80px;
  width: 100vw;
  background-color: rgba(26, 26, 26, 0.8);
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align:center;
  padding: 0 20px;
  z-index: 1;
  font-family: "Roboto", sans-serif;
  img {
    width: 48px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  display:flex;
  align-items:center;
  text-align: center;
`;

const Menu = styled.div`
  display: flex;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    color: #f0f0f0;
  }

  svg {
    font-size: 24px;
    margin-right: 5px;
  }
`;

const Support = styled.div`
  display: flex;
  margin-right:35px;
`;
