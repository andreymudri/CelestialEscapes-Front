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