import React, { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const EduPage = () => {
  const [firstRendering, setFirstRendering] = useState(true);

  useEffect(() => {
    if (firstRendering) {
      setFirstRendering(false);
    }
  }, [firstRendering]);
  const intro = useRef([
    {
      schoolCtg: "고등학교",
      schoolNm: "미림여자정보과학고등학교(마이스터고)",
      startDt: "2017.03",
      endDt: "2020.02",
      major: "인터랙티브 미디어과",
      status: "졸업",
    },
    {
      schoolCtg: "대학교",
      schoolNm: "한국방송통신대학교",
      startDt: "2020.03",
      endDt: "2023.08",
      major: "컴퓨터과학과",
      grade: "3.8/4.5",
      status: "졸업 예정",
    },
  ]);

  return (
    <FlexTable width={"100%"} firstRendering={firstRendering}>
      <Layout>
        <table>
          <tr>
            <th>학교</th>
            <th>학교 명</th>
            <th>입학일</th>
            <th>졸업일</th>
            <th>전공</th>
            <th>성적</th>
            <th>상태</th>
          </tr>
          <tbody>
            {intro.current.map((item) => {
              return (
                <Row>
                  <td>{item.schoolCtg}</td>
                  <td>{item.schoolNm}</td>
                  <td>{item.startDt}</td>
                  <td>{item.endDt}</td>
                  <td>{item?.major}</td>
                  <td>{item?.grade || ""}</td>
                  <td>{item.status}</td>
                </Row>
              );
            })}
          </tbody>
        </table>
      </Layout>
    </FlexTable>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; z-index: 9999}
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; z-index: -1; pointer-events: none;}
`;

const slideUp = keyframes`
  from {
    // transform: translateY(12.5rem);
    opacity: 0; height : 0px; }
  to {
    // transform: translateY(0);
   opacity: 1; z-index: 9999; height : 100% }
`;

const slideDown = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(12.5rem); }
`;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  user-select: none;
  font-family: "NanumSquare";

  table {
    background: white;
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    box-shadow: 6px 5px 10px 0px #4f4f4f38;

    th {
      padding: 5px;
    }
    tr td {
      user-select: none;
      white-space: pre;
      padding: 10px 13px;

      border: 5px solid transparent;
      border-spacing: 25px;
    }
  }
`;

export const FlexTable = styled.div`
  width: ${({ width }) => width};
  font-size: 2rem;
  padding: 10px 1rem;
  font-size: 1.7rem;
  gap: 10px;
  display: flex;
  flex-direction: column;

  ${({ firstRendering }) =>
    firstRendering
      ? css`
          opacity: 0;
          z-index: -1;
          pointer-events: none;
        `
      : css`
          animation-duration: 0.8s;
          animation-timing-function: ease-out;
          animation-name: ${slideUp};
          animation-fill-mode: forwards;

          ${(props) =>
            props.disappear &&
            css`
              animation-name: ${fadeOut};
            `}
        `}
`;

const Row = styled.tr``;

export default React.memo(EduPage);
