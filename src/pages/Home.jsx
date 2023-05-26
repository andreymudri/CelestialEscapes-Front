import { HomeImgBox, MainContainer } from "./styles/styles.jsx";
import Aurora1 from '../assets/Aurora1.jpg';
import Aurora2 from '../assets/Aurora2.jpg';
import Aurora3 from '../assets/Aurora3.jpg';
import Aurora4 from '../assets/Aurora4.jpg';
export default function Home() {
    


    return (
        <MainContainer>
            <HomeImgBox><img src={Aurora1}/><p>The Northern Lights dance across the sky, painting the night with vibrant hues of green and purple. It's a breathtaking display of nature's beauty, a reminder of the magic that exists in the world.</p></HomeImgBox>
            <HomeImgBox><img src={Aurora2}/><p>The Northern Lights shimmer and glow, casting a soft pink and blue light over the frozen lake. It's a peaceful and serene moment, a reminder of the stillness that can be found in the midst of chaos.</p></HomeImgBox>
            <HomeImgBox><img src={Aurora3}/><p>The Northern Lights blaze across the sky, illuminating the mountain range with a bright green light. It's a powerful and awe-inspiring sight, a reminder of the forces of nature that shape our world.</p></HomeImgBox>
            <HomeImgBox><img src={Aurora4}/><p>The Northern Lights flicker and dance, casting a warm red and orange glow over the forest. It's a moment of tranquility and wonder, a reminder of the beauty that can be found in even the darkest of nights.</p></HomeImgBox>
        
        
        </MainContainer>)
    
}