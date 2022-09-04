import React, { useCallback, useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";

import LangButton from "../../components/LangButton";

const EduPage = () => {
  const initialState = ["HTML", "STYLED", "JAVA", "REACT"];

  const [firstRendering, setFirstRendering] = useState(true);
  const [langFilter, setLangFilter] = useState(initialState);
  useEffect(() => {
    if (firstRendering) {
      setFirstRendering(false);
    }
  }, [firstRendering]);
  const intro = useRef([
    {
      id: "sqisoft",
      dueDate: "2019.09 ~ 재직중",
      companyNm: "에스큐아이소프트",
      team: "사원",
      companyDetail: "2020.02",
      work: "웹개발자(F/E)",
    },
  ]);

  const workDetail = useRef([
    {
      id: "sqisoft",
      data: [
        {
          title: "영업 관리 시스템 개발 및 운영, 유지보수",
          date: "2019.09.02~2021.12.31",
          impTxt: `사내의 영업이익/ 투입 관리할 수 있는 웹사이트 유지보수 및 개선`,
          stack: [
            "Spring Framework",
            "JAVA",
            "JSP",
            "Mybatis",
            "MYSQL",
            "AWS",
            "JQuery",
          ],
          result:
            "소나큐브를 통해 버그/취약점 개선하여 안정성 수립 / MSA 구조 전환",
          detailWork: [
            "직원 투입관리 맨먼스 로직 버그 개선",
            "경비 영수증 처리 시스템 개발",
            "인사평가 시스템 개발",
            "모놀리식 아키텍처 기반의 영업관리 시스템을 MSA로 전환",
            "MSA 서비스 설계 및 분류작업",
          ],
        },
        {
          title: "목표 서비스 개발 (OKR)",
          date: "2020.04.01.~2020.05.10",
          impTxt: `사내 부서/기업별 목표 및 진척도 관리 페이지 개발`,
          stack: ["SPRING", "JAVA", "JSP", "Mybatis", "MYSQL", "AWS", "JQuery"],
          result: "매 주마다, OKR 기반 데이터로 사업부장 주간보고 시행",
          detailWork: [
            "OKR 기반의 주간보고 페이지 개발",
            "Spring boot 기반 RESTful API 개발",
          ],
        },
        {
          title: "목표 서비스 개발 (OKR)",
          date: "2020.04.01.~2020.05.10",
          impTxt: `사내 부서/기업별 목표 및 진척도 관리 페이지 개발`,
          stack: ["SPRING", "JAVA", "JSP", "Mybatis", "MYSQL", "AWS", "JQuery"],
          result: "매 주마다, OKR 기반 데이터로 사업부장 주간보고 시행",
          detailWork: [
            "OKR 기반의 주간보고 페이지 개발",
            "Spring boot 기반 RESTful API 개발",
          ],
        },
        {
          title: "전표 데이터, 양식 자동화 프로그램 개발",
          date: "2021.07~2021.09",
          impTxt: `전표 데이터 엑셀파일 첨부 시 자동 전표 양식으로 변환해주는 프로그램 개발`,
          stack: ["SPRING", "JAVA", "JSP", "Mybatis", "MYSQL", "AWS", "JQuery"],
          result: "500개 이상의 데이터 수기입력 =≫ 자동화 변환",
          detailWork: [
            "데이터 자동 전표 양식 변환 로직 개발",
            "Spring boot 기반 RESTful API 개발",
          ],
        },
        {
          title: "사내 유연 º휴가 통합 서비스 개발",
          date: "2021.04~2021.06",
          impTxt: `사내 직원들의 휴가와 근무시간을 기록/관리하는 웹서비스 제작`,
          stack: ["REACT", "Spring Boot", "JPA", "Jenkins", "Mysql"],
          result: "서면결제-≫시스템화, 개발 프로세스 구축",
          detailWork: [
            "피그마 툴 이용하여 UI 기획",
            "DB 설계",
            "Front-end 개발",
            "Spring boot 기반 RESTful API 개발",
            "젠킨스 CICD 배포 환경 구성",
          ],
        },
        {
          title: "현장실습 기업현장교육 지원",
          date: "2021.08~2021.12",
          impTxt: `현장실습생 2명 MSA 및 Spring Cloud CICD 환경 교육`,
          stack: ["REACT", "JPA", "Jenkins"],
          result: "현장실습생 업무 적응 도움",
          detailWork: [
            "MSA 구조 및 모놀리식 아키텍처 설명",
            "React.js, webpack 개발환경 교육",
            "Netflix OSS(Juul, Eureka),Spring cloud 개발 환경 설명",
          ],
        },
        {
          title: "ELIGA 인터랙션 서비스 개발",
          date: "2022.01~2022.03",
          impTxt: `사이니지에 표시될 콘텐츠 편집기 제작`,
          stack: ["REACT", "RTK", "JPA", "Jenkins"],
          result: "redux toolkit query 학습",
          detailWork: [
            "콘텐츠 편집화면 프레임 기능 개발",
            "기존 서비스 버그 개선",
            "편집 화면 실시간 썸네일 개발",
          ],
        },
        {
          title: "ELIGA STORE 사내카페 서비스 개발",
          date: "2022.05~2022.07",
          impTxt: `사내카페 주문시스템 제작`,
          stack: ["REACT", "THUNK", "NODE.JS"],
          result: "카카오 아지트 사내카페 도입 과정 경험",
          detailWork: [
            "식당/카페 CMS 페이지 리포트 기능 개발",
            "카페, 식당 주문 앱 - 식단표 개발 및 버그 개선",
            "식권, 주문키오스크 UI 반응형 퍼블리싱",
            "POS 주문내역 로딩 속도 개선",
          ],
        },
        {
          title: "국립중앙박물관 ETRI 큐레이터 웹사이트",
          date: "2022.07~2022.09",
          impTxt: `큐레이터 전시회 기획을 위한, 소장품 관리할 수 있는 웹 제작`,
          stack: ["REACT", "Typescript", "NODE.JS", "JENKINS"],
          result: "개발프로세스 경험, Typescript 기반으로 제작",
          detailWork: [
            "로그인, 프로젝트/소장품 상세페이지 프론트엔드 개발",
            "Redux Thunk 개발환경 세팅",
          ],
        },
      ],
    },
  ]);

  const handleClickFilter = useCallback(
    (item) => {
      const findIndex = langFilter.findIndex((lang) => lang === item);
      if (findIndex > -1) {
        setLangFilter(langFilter.filter((lang) => lang !== item));
      } else {
        setLangFilter(langFilter.concat(item));
      }
    },
    [langFilter]
  );

  return (
    <FlexTable width={"100%"} firstRendering={firstRendering}>
      <Layout>
        <table>
          <thead>
            <tr>
              <th>재직 기간</th>
              <th>회사명</th>
              <th>직급</th>
              <th>업무 상세</th>
              <th>주요직무</th>
            </tr>
          </thead>
          <tbody>
            {intro.current.map((item) => {
              return (
                <Row>
                  <td>{item.dueDate}</td>
                  <td>{item.companyDetail}</td>
                  <td>{item.companyNm}</td>
                  <td>{item.team}</td>
                  <td>{item?.work}</td>
                </Row>
              );
            })}
          </tbody>
        </table>
      </Layout>
      <WorkDetailArea>
        <TagList>
          TOP LANG
          {initialState.map((item) => (
            <LangButton
              elemType={"BUTTON"}
              isActive={langFilter.some((t) => t === item)}
              type={item}
              onClick={() => handleClickFilter(item)}
            />
          ))}
        </TagList>
        <WorkListArea>
          {workDetail.current.map((item, index) => {
            return (
              <>
                {item.data.map((work) => {
                  return (
                    <div className="data">
                      <li className="title"> {work.title}</li>
                      <li>
                        <div className="label">진행기간</div>
                        <div className="value">{work.date}</div>
                      </li>
                      <li>
                        <div className="label">주요내용 </div>
                        <div className="value">{work.impTxt}</div>
                      </li>
                      <li>
                        <div className="label">사용한 기술스택 및 지식 </div>
                        <div className="value stack">
                          {work.stack.map((item) => {
                            console.log(item);
                            return (
                              <LangButton
                                isActive={langFilter.some((t) => t === item)}
                                elemType={"text"}
                                type={item}
                              />
                            );
                          })}
                        </div>
                      </li>
                      <li>
                        <div className="label">결과/성과 </div>
                        <div className="value">{work.result}</div>
                      </li>
                      <li>
                        <div className="label">상세담당업무 </div>
                        <div className="value">
                          {work.detailWork.map((detail) => {
                            return <li>{detail}</li>;
                          })}
                        </div>
                      </li>
                    </div>
                  );
                })}
              </>
            );
          })}
        </WorkListArea>
      </WorkDetailArea>
    </FlexTable>
  );
};

const WorkListArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const TagList = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  right: 0;
  gap: 10px;
  margin: 40px;
  background-color: white;
  padding: 9px;
  border-radius: 4px;
  font-size: 5pt;
  font-weight: 600;
  border: 1px solid black;
`;

const WorkDetailArea = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  padding-right: 3px;
  position: relative;
  justify-content: space-between;

  .data {
    background-color: #ffffff94;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 21px 35px;
    font-size: 1rem;
    border-bottom: 1px solid #ffffff54;

    li {
      display: flex;
      align-items: center;
      &:hover {
        .value {
          font-weight: 400;
          /* color: white; */
        }
      }
      div {
        padding: 7px;
      }
      .label {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 15rem;
        font-weight: 500;
        background-color: #ffffff94;
        border-bottom: 1px solid white;
      }
      .value {
        flex: 3;
        padding: 0px 20px 0px 13px;

        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .stack {
        flex-direction: row;
        gap: 3px;
      }
    }

    .title {
      list-style: none;
      font-size: 1.2rem;
      font-weight: 600;
    }
  }

  ::-webkit-scrollbar {
    width: 5.2px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #dddddd;
    border-radius: 2px;
  }
  ::-webkit-scrollbar-button {
    display: none;
  } /* 스크롤 바 상 하단 버튼 */
  ::-webkit-scrollbar-track {
    background-color: transparent;
    min-width: 20px;
  } /* 스크롤 바 밑의 배경 */
`;

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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  user-select: none;
  position: sticky;
  top: 0;

  font-family: "NanumSquare";
  z-index: 1;
  table {
    background: white;
    width: 100%;
    border-collapse: collapse;
    text-align: center;

    thead {
      box-shadow: 1px 1px 7px 0px #b0b0b02b;
    }

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
  /* height: 50rem; */
  font-size: 1rem;
  gap: 10px;
  display: flex;
  flex-direction: column;

  position: sticky;
  top: 0;
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
        `};
`;

const Row = styled.tr``;

export default React.memo(EduPage);
