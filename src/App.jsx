import styled from 'styled-components';
import backgroundImg from './assets/background.png';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';




const apiUrl = import.meta.env.VITE_API_URL;

function App() {

  return (
    <>
      <Container>
        <BrowserRouter>
          <Routes>
           <Route path="/" element={<Home />} />
 {/*             <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/hotels" element={<Hotels />} /> */}
        </Routes>
        </BrowserRouter>
      </Container>
    </>
  )
}

export default App;
export { apiUrl };

  
const Container = styled.div`
background-color: #1a1a1a;
background-image: url(${backgroundImg});
  margin:0;
  border-left:-5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-items: center;
  min-height: 100vh;

  h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #CC8400;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
`;