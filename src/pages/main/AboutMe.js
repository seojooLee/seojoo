import React, { useCallback, useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import RSS from "../../components/Rss";
import { ReactComponents as MdOutlineSchool } from "react-icons/md";
import { ReactComponents as MdOutlineWorkOutline } from "react-icons/md";

const AboutMe = () => {
  const [activeItem, setActiveItem] = useState("edu");
  const navigate = useNavigate();
  const intro = useRef([
    { label: "이름", value: "이서주" },
    { label: "생일", value: "01.12.17 (22세/만 20세)" },
    { label: "학력", value: "한국방송통신대학교 (졸업예정) " },
    { label: "e-mail", value: "teren621@gmail.com" },
    { label: "tech-blog", value: "https://potential-coding.tistory.com/" },
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
    <Wrapper
      color={
        ButtonListRef.current.find((item) => item.label === activeItem).color
      }
    >
      <Layout>
        <Default>
          <NameCard>
            <div className="introduce">
              <div className="circleBg" />
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
                      {item.label === "tech-blog" ? (
                        <a href={item.value} className="value">
                          {item.value}
                        </a>
                      ) : (
                        <div className="value">{item.value}</div>
                      )}
                    </FlexItem>
                  );
                })}
              </FlexTable>
            </div>

            <RSS />
          </NameCard>
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
    </Wrapper>
  );
};

const BgAnimation = (color) => keyframes`
  0%{
    background : linear-gradient(304deg, ${color} , transparent);
    /* background:   linear-gradient(169deg, rgba(255,255,255,1) 0%, rgba(240,251,255,1) 43%, rgba(88,193,255,1) 100%); */
  }
   
  100%{
    background: radial-gradient(${color}, #0e446b00) ;
  }

`;

const SubArea = styled.div`
  width: 100%;
  max-width: 1400px;
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  min-height: 969px;
  width: 100%;
  background: white;
  /* animation: ${(props) => BgAnimation(props.color)} 10s ease-in infinite; */
`;

const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  gap: 2px;
  justify-content: center;
  height: 40px;
  display: grid;
  grid-template-columns: repeat(4, 200px);
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
      border-bottom: 2px solid black;
      opacity: 80%;
      /* box-shadow: inset 1px 1px 11px 0px #584a4a4f; */
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
  /* background: white; */
  /* padding-left: 140px; */
  font-size: 1rem;
  gap: 10px;
  display: flex;
  flex-direction: column;
  background: #ffffff2b;
  padding: 10px 20px;
`;

const FlexItem = styled.div`
  display: flex;
  gap: 30px;
  padding: 5px 0px;
  border-bottom: 1px solid #ffffff5c;
  white-space: pre;
  .label {
    flex: 1;
    padding: 0px 2rem;
  }
  .value {
    flex: 3;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;

  align-items: center;
  font-size: 4rem;
  user-select: none;
  font-family: "NanumSquare";
  transition: all 3s;
  margin: 20px;
  border-radius: 4px;
  border: 2px solid black;
`;

const NameCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 70%;
  justify-content: flex-end;
  align-items: center;

  .introduce {
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    justify-content: center;

    .circleBg {
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background-color: white;
      position: absolute;
      z-index: -1;
      left: -50px;
      bottom: 0px;
    }
  }
`;

const Card = styled.div`
  display: flex;
  position: relative;
  width: 100%;
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
  height: 100%;
  width: 100%;
  font-size: 4rem;
`;

export default React.memo(AboutMe);
