import React, { useCallback, useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

const AboutMe = () => {
  const [activeItem, setActiveItem] = useState("edu");
  const navigate = useNavigate();
  const intro = useRef([
    { label: "이름", value: "이서주" },
    { label: "생일", value: "01.12.17 (22세/만 20세)" },
    { label: "학력", value: "대학졸업예정" },
    { label: "e-mail", value: "teren621@gmail.com" },
    { label: "tech-blog", value: "potential-coding.tistory.com" },
  ]);

  const ButtonListRef = useRef([
    { color: "pink", label: "edu", value: "학력" },
    { color: "green", label: "work", value: "경력사항" },
    { color: "orange", label: "lang", value: "사용언어" },
    { color: "purple", label: "certi", value: "자격증" },
  ]);

  const handleClick = useCallback(
    (label) => {
      setActiveItem(label);
      navigate(`/seojoo/about/${label}`);
    },
    [navigate]
  );

  return (
    <Layout
      color={
        ButtonListRef.current.find((item) => item.label === activeItem).color
      }
    >
      <Default>
        <Card>
          <Image
            src={process.env.PUBLIC_URL + "/image/hello.png"}
            alt="noImage"
            draggable={false}
          />
          <FlexTable width={"70%"}>
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
          <ButtonArea>
            {ButtonListRef.current.map((item) => {
              return (
                <Button
                  isActive={activeItem === item.label}
                  onClick={() => handleClick(item.label)}
                >
                  {item.value}
                </Button>
              );
            })}
          </ButtonArea>
        </Card>
        <SubArea>
          <Outlet />
        </SubArea>
      </Default>
    </Layout>
  );
};

const BgAnimation = (color) => keyframes`
  0%{
    background : linear-gradient(304deg, ${color} , transparent);
  }
   
  100%{
    background: radial-gradient(${color}, #0e446b00) ;
  }

`;

const SubArea = styled.div`
  width: 100%;
  max-width: 1400px;

  overflow: hidden;
`;

// const BgAnimation = keyframes`
//   0%{
//     background : linear-gradient(304deg, #ffc107, transparent);
//   }

//   100%{
//     background: radial-gradient(#03a9f4, #0e446b00) ;
//     color : white;
//   }

// `;

const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  gap: 2px;
  height: 80px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Button = styled.div`
  padding: 10px;
  /* border-radius: 20px; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  white-space: pre;
  cursor: pointer;
  font-size: 1.2rem;

  ${({ isActive }) =>
    isActive &&
    css`
      font-weight: 600;
      opacity: 80%;
      box-shadow: inset 1px 1px 11px 0px #584a4a4f;
    `}

  &:hover {
    transition: 0.3s all;
    /* background-color: gray; */
    opacity: 80%;
  }
`;

const Image = styled.img`
  width: 300px;
  /* position: absolute; */
  /* left: -132px; */
`;

export const FlexTable = styled.div`
  width: ${({ width }) => width};
  font-size: 2rem;
  /* background: white; */
  /* padding-left: 140px; */
  font-size: 1.4rem;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

const FlexItem = styled.div`
  display: flex;
  gap: 30px;
  padding: 5px 0px;
  border-bottom: 1px solid #ffffff5c;

  .label {
    flex: 1;
    padding: 0px 2rem;
  }
  .value {
    flex: 3;
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
  /* background: radial-gradient(#769eb0c2, #0e446b00); */
  font-family: "NanumSquare";
  animation: ${(props) => BgAnimation(props.color)} 10s ease-in infinite;
  transition: all 3s;
  padding: 20px;
`;

const Card = styled.div`
  display: flex;
  position: relative;
  width: 70%;
  justify-content: flex-end;
  align-items: center;
`;

const Default = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  width: 100%;
  gap: 2.3rem;

  width: 100%;
  font-size: 4rem;
`;

export default React.memo(AboutMe);
