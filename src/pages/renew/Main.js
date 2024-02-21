import dayjs from "dayjs";
import React, { useCallback, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { ReactComponent as BlogSvg } from "../../assets/icon/blog.svg";
import { ReactComponent as GitHubSvg } from "../../assets/icon/github.svg";
import { ReactComponent as LinkedinSvg } from "../../assets/icon/linkedin.svg";

const MainPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const begin_working = dayjs("2019-09-02");
  const navigate = useNavigate();

  const moveUrl = useCallback(
    (path) => {
      const defaultUrl = "/seojoo";
      navigate(defaultUrl + path);
    },
    [navigate]
  );

  return (
    <Container isMobile={isMobile}>
      <LeftSide isMobile={isMobile}>
        <p>I'm SJ, a</p>
        <p>Web Developer</p>
        <Line />

        <div className="footer">
          <div className="box">
            <div className="head">About</div>
            <div className="context">
              Hello, I have {dayjs().diff(begin_working, "year")} years of
              experience as a web developer.
            </div>
            <StyledButton onClick={() => moveUrl("/about")}>
              Check it out!
            </StyledButton>
          </div>

          <div className="box">
            <div className="head">Blog</div>
            <div className="context">
              I'm uploading my new programming knowledge on my tech-blog
            </div>
            <StyledButton onClick={() => moveUrl("/portfolio")}>
              Check it out!
            </StyledButton>
          </div>
        </div>
      </LeftSide>

      <RightSide isMobile={isMobile}>
        <ProfileImg
          isMobile={isMobile}
          alt="noImage"
          src={process.env.PUBLIC_URL + "/image/person.jpg"}
          draggable={false}
        />
        <div className="circle">
          <div>
            <div
              className="item"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/seojoo-lee-2b685818a/"
                );
              }}
            >
              <LinkedinSvg />
            </div>
            <div
              onClick={() => {
                window.open("https://github.com/seojooLee");
              }}
              className="item"
            >
              <GitHubSvg />
            </div>
            <div
              onClick={() => {
                window.open("https://potential-coding.tistory.com/");
              }}
              className="item"
            >
              <BlogSvg />
            </div>
          </div>
        </div>
      </RightSide>
    </Container>
  );
};

const StyledButton = styled.button`
  background-color: lightgray;
  padding: 4px 14px;
  border-radius: 10px;
  color: black;
`;

const Line = styled.div`
  width: 90%;
  height: 4px;
  background-color: black;
  // box-shadow: 20px -2px 3px 1px #ffffffab;
  margin: 20px 0px;
`;

const ProfileImg = styled.img`
  z-index: 1;
  aspect-ratio: 1/1;
  position: relative;
  box-shadow: 13px 20px 20px 4px #00000033;
  user-select: none;
  background: radial-gradient(circle at center, white 60%, transparent 61%);
  border-radius: 50%;
  overflow: hidden;
  //border: 1px solid white;
  width: ${({ isMobile }) => (isMobile ? "13rem" : "30rem")};
  object-fit: cover;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  //padding: min(40px);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #252525;
  flex-wrap: wrap;
  //  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  gap: 6rem;
`;

const CircleAnimation = keyframes`
  from{ 
    color : black;
  }
   
  to{
    animation-timing-function:  cubic-bezier(1,0,0.8,1);
  }

`;

const LeftSide = styled.div`
  font-size: ${({ isMobile }) => (isMobile ? "3rem" : "3.8rem")};
  font-family: "Roboto";
  color: white;

  display: flex;
  flex-basis: 25rem;
  flex-direction: column;
  gap: 10px;
  flex-shrink: 1;
  p {
    margin: 0px;
    animation: ${CircleAnimation} 2s ease-in Alternate;
  }
  .footer {
    display: flex;
    gap: 10px;
    .box {
      flex: 1;
      height: 8rem;
      font-size: 0.8rem;
      display: flex;
      flex-direction: column;
      .head {
        background: #141414;
        border: 0.5px solid lightgray;
        width: 100%;
        color: white;
        padding: 3px;
      }
      .context {
        padding: 1rem 0.5rem;
        text-overflow: ellipsis;
        white-space: pre-wrap;
        overflow: hidden;
        height: 100px;
      }
    }
  }
`;

const boxFade = keyframes`
   0% {
    left: -50px;
  } 
  50%{
  }
  100% {
    left : 0;

  }
`;
const RightSide = styled.div`
  position: relative;
  .circle {
    animation: ${boxFade} 0.7s 0s linear;
    position: absolute;
    top: 0px;
    width: ${({ isMobile }) => (isMobile ? "15rem" : "32rem")};
    height: 100%;
    /* right: 100px; */
    border-radius: 50%;
    background-color: #00000014;
    align-items: flex-end;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .item {
      text-align: center;
      color: white;
      text-align: left;
      padding: 5px 0px;
      cursor: pointer;
      svg path {
        fill: white;
      }

      &:hover {
        svg path {
          fill: black;
          stroke: white;
        }
      }
    }
  }

  .sns {
    position: absolute;

    align-self: flex-end;
    border-radius: 50%;
    display: flex;
    right: 0px;

    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: 2px;
    user-select: none;
  }
`;

export default MainPage;
