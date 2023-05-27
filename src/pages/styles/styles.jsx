import styled from "styled-components";


export const HomeImgBox = styled.div`
    max-width:  18rem;
    max-height: 18rem;
    min-height:14rem;
    min-width: 14rem;
    box-sizing: content-box;
    border-radius: 15px;
    background: #fff;
    border: 1px solid #ccc;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    padding:5px;
    img {
        max-width:  7rem;
        max-height: 7rem;
        border-radius:10px;
        border: 1px solid #ccc;
        }
        p {
            font-size: .8rem;
            color: #666;
            text-align: center;
            margin-top: .5rem;
        }

`
export const MainContainer = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow:auto;
`

export const FlightsContainer = styled.div`
margin-top:80px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

export const FlightCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  width: 300px;
  background-color: rgba(26, 26, 26, 0.8);
`;

export const FlightTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;
export const FlightDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FlightDetail = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 5px;
`;