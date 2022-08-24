import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

import Image1 from "../../../src/img/me1.png";
import Image2 from "../../../src/img/me2.png";

const AboutMe = () => {
  const moveBtnRef = useRef(null);
  const navigate = useNavigate();
  const [cursorLocation, setCursorLocation] = useState({ x: 0, y: 0 });
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX - 50;
      const mouseY = e.clientY - 50;
      setCursorLocation({ x: mouseX, y: mouseY });
    });
  }, []);

  const intro = useRef([
    { label: "이름", value: "이서주" },
    { label: "생일", value: "01.12.17 (22세/만 20세)" },
    { label: "학력", value: "대학졸업예정" },
    { label: "e-mail", value: "teren621@gmail.com" },
  ]);
  return (
    <Layout>
      <Default>
        <Card>
          <Image src={Image1} alt="noImage" draggable={false} />
          <FlexTable width={"50%"}>
            {intro.current.map((item, index) => {
              return (
                <FlexItem>
                  <div className="label">{item.label}</div>
                  <div className="value">{item.value}</div>
                </FlexItem>
              );
            })}
          </FlexTable>
        </Card>
        <Card>
          <FlexTable width={"100%"}>
            {intro.current.map((item, index) => {
              return (
                <FlexItem>
                  <div className="label">{item.label}</div>
                  <div className="value">{item.value}</div>
                </FlexItem>
              );
            })}
          </FlexTable>
        </Card>
      </Default>
    </Layout>
  );
};

const FlexTable = styled.div`
  width: ${({ width }) => width};
  font-size: 2rem;
  background: white;
  padding: 2em;
  font-size: 1.7rem;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

const FlexItem = styled.div`
  display: flex;
  gap: 30px;
  padding: 5px 0px;
  & div {
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

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  user-select: none;
  background: radial-gradient(#769eb0c2, #0e446b00);
`;

const Card = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Default = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  max-width: 1333px;
  padding: 0 20px;
  margin: 0 auto;
  width: 100%;
  gap: 2.3rem;
`;

const Image = styled.img`
  width: 300px;
`;
export default React.memo(AboutMe);
