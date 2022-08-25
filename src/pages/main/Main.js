import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { useMediaQuery } from "react-responsive";

const Main = () => {
  const navigate = useNavigate();
  const [cursorLocation, setCursorLocation] = useState({ x: 0, y: 0 });

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1279px)",
  });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX - 50;
      const mouseY = e.clientY - 50;
      setCursorLocation({ x: mouseX, y: mouseY });
    });
  }, []);
  return (
    <Layout>
      <Default>
        <Image
          src={process.env.PUBLIC_URL + "/image/me1.png"}
          alt="noImage"
          draggable={false}
        />
        안녕하세요, 이서주입니다.
        <Circle></Circle>
      </Default>
      <MoveBtn
        cursorLocation={cursorLocation}
        onClick={() => navigate("/seojoo/about/edu")}
      >
        들어가기
      </MoveBtn>
    </Layout>
  );
};

const BgAnimation = keyframes`
  0%{
    background : linear-gradient(304deg, #ffc107, transparent);
  }
   
  100%{
    background: radial-gradient(#03a9f4, #0e446b00) ;
    color : white;
  }

`;

const CircleAnimation = keyframes`
  from{ 
    transform : translate(0,0);
    background: white;
    opacity : 20%;
  
  }
   
  to{
    transform : translate(210px,40px); 
    animation-timing-function:  cubic-bezier(1,0,0.8,1);
    }

`;

const MoveBtn = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  left: 30px;
  background: black;
  border-radius: 50%;
  opacity: 30%;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  ${({ cursorLocation }) =>
    cursorLocation &&
    css`
      left: ${cursorLocation.x}px;
      top: ${cursorLocation.y}px;
    `}
`;
const Circle = styled.div`
  position: absolute;
  z-index: -1;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  animation: ${CircleAnimation} 6s ease-in Infinite Alternate;
`;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  user-select: none;

  animation: ${BgAnimation} 10s ease-in infinite;
`;

const Default = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2.3rem;
`;

const Image = styled.img`
  width: 400px;
  &:hover {
    transition: 3s ease-in-out;
  }
`;
export default React.memo(Main);
