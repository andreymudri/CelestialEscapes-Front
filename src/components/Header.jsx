import { styled } from "styled-components";

export default function Header() {
    return (
        <HeaderContainer><div></div><div>Celestial Escapes</div> <div></div></HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    height: 80px;
    width:100vw;
    background-color:rgba(26,26,26, 0.8) ;
    position:absolute;
    top:0px;
    left:0px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`