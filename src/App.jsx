import styled from 'styled-components';
import backgroundImg from './assets/background.png';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import Flights from './pages/Flights.jsx';
import Hotels from './pages/Hotels.jsx';



const apiUrl = import.meta.env.VITE_API_URL;

function App() {

  return (
    <>
      <Container>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/hotels" element={<Hotels />} /> 
            <Route path="/hotels/:id" element={<Hotels />} /> 
 {/*             <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />

*/}
        </Routes>
        </BrowserRouter>
      </Container>
    </>
  )
}

export default App;
export { apiUrl };

  
const Container = styled.div`
background-image: url(${backgroundImg});
  margin:0;
  border-left:-5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-items: center;
  min-height: 100vh;
  width:100vw;
  font-family: 'Roboto', sans-serif;

`;