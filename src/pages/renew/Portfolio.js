import React from "react";
import styled from "styled-components";

const Portfolio = () => {
  return (
    <Container>
      <Card>
        <div className="title">Nerator</div>
        <div className="body">
          <div>
            접속 링크 : &nbsp;
            <a href="https://seojoolee.github.io/nerator/index.html">
              <StyledButton>Link</StyledButton>
            </a>
          </div>

          <div className="list-title">진행 기록</div>

          <a href="https://potential-coding.tistory.com/31">
            <li>기획 의도 </li>
          </a>
          <a href="https://potential-coding.tistory.com/32">
            <li>버튼 컴포넌트 만들기 </li>
          </a>
          <a href="https://potential-coding.tistory.com/33">
            <li>기본 레이아웃 구성 및 팝업 생성 </li>
          </a>
          <a href="https://potential-coding.tistory.com/34">
            <li>사진 불러오기, 엑셀 읽어오기 </li>
          </a>
          <a href="https://potential-coding.tistory.com/58">
            <li>명함에 속성 좌표 이동하기 </li>
          </a>
          <a href="https://potential-coding.tistory.com/71">
            <li>에디터 구현하기-1 </li>
          </a>

          <img
            src={process.env.PUBLIC_URL + "/image/nerator-test.gif"}
            alt="no-img"
          />
        </div>
      </Card>
    </Container>
  );
};

const StyledButton = styled.button`
  background-color: lightgray;
  padding: 4px 14px;
  border-radius: 10px;
  color: black;
`;

const Container = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #252525;
  flex-wrap: wrap;
  //  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  gap: 6rem;
`;

const Card = styled.div`
  width: 100%;
  opacity: 80%;
  background-color: white;
  border-radius: 10px;
  .body {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .list-title {
    font-weight: 700;
  }

  .title {
    width: 100%;
    padding: 10px 20px;
    background-color: #252525;
    opacity: 80%;
    color: white;
  }
`;

export default Portfolio;
