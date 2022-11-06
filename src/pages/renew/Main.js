import dayjs from "dayjs";
import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
const MainPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const begin_working = dayjs("2019-09-02");

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
            <StyledButton>Check it out!</StyledButton>
          </div>

          <div className="box">
            <div className="head">Blog</div>
            <div className="context">
              I'm uploading my new programming knowledge on my tech-blog to
              remember it
            </div>
            <StyledButton>Check it out!</StyledButton>
          </div>
        </div>
      </LeftSide>

      <RightSide>
        <ProfileImg
          isMobile={isMobile}
          alt="noImage"
          src={process.env.PUBLIC_URL + "/image/person.png"}
          draggable={false}
        />
      </RightSide>
    </Container>
  );
};

const StyledButton = styled.button`
  background-color: gray;
  padding: 4px 14px;
  border-radius: 10px;
  color: white;
`;

const Line = styled.div`
  width: 90%;
  height: 4px;
  background-color: black;
  // box-shadow: 20px -2px 3px 1px #ffffffab;
  margin: 20px 0px;
`;

const ProfileImg = styled.img`
  box-shadow: 13px 20px 20px 4px #00000033;
  user-select: none;

  background: radial-gradient(circle at center, white 60%, transparent 61%);
  border-radius: 50%;
  overflow: hidden;
  //border: 1px solid white;
  width: ${({ isMobile }) => (isMobile ? "20rem" : "30rem")};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: min(40px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #252525;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  border: 1px solid black;
  gap: 40px;
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
        border: 1px solid white;
        width: 100%;
        color: white;
        padding: 3px;
      }
      .context {
        padding: 1rem 0.5rem;
        height: 4rem;
        width: 200px;
      }
    }
  }
`;
const RightSide = styled.div``;

export default MainPage;
