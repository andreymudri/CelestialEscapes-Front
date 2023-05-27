import React, { useState } from "react";
import styled from "styled-components";
import { AiFillHome, AiFillCustomerService } from "react-icons/ai";
import { IoAirplane, IoHome,IoList } from "react-icons/io5";
import iconeLogo from "../assets/northernLights.png";
import { useNavigate } from "react-router-dom";


export default function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleMenu()  {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Title>
        <img src={iconeLogo} alt="Icon" />
        Celestial Escapes
      </Title>
      <MenuButton onClick={toggleMenu}>
        <IoList/>
        Menu
      </MenuButton>
      <MenuList isMenuOpen={isMenuOpen}>
        <MenuItem onClick={()=>navigate("/flights")}>
          <IoAirplane />
          Flights
        </MenuItem>
        <MenuItem onClick={()=>navigate("/hotels")}>
          <AiFillHome />
          Hotels
        </MenuItem>
        <MenuItem onClick={()=>navigate("/login")}>
          <IoHome />
          Login
        </MenuItem>
        <MenuItem onClick={()=>navigate("/register")}>Register</MenuItem>
        <MenuItem onClick={() => alert('Not implemented yet')}>
          <AiFillCustomerService />
          Support
        </MenuItem>
      </MenuList>
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
  text-align: center;
  padding: 0 20px;
  z-index: 1;
  font-family: "Roboto", sans-serif;

  @media (max-width: 768px) {
    height: 10%;
    padding: 0 10px;
  }

  img {
    width: 48px;

    @media (max-width: 768px) {
      width: 36px;
    }
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  display: flex;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const MenuButton = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    color: #ffffff;
    cursor: pointer;
margin-right:2rem;
    &:hover {
      color: #f0f0f0;
    }

    svg {
      font-size: 24px;
      margin-right: 5px;
    }
  }
`;

const MenuList = styled.ul`
  display: flex;
  margin-right:25px;

  @media (max-width: 768px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: rgba(26, 26, 26, 0.8);
    padding: 10px 0;
  }
`;

const MenuItem = styled.li`
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
