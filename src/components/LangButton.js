import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as ReactIcon } from "../logo/React-icon.svg";
import { ReactComponent as HtmlIcon } from "../logo/Html-icon.svg";
import { ReactComponent as JavaIcon } from "../logo/Java-icon.svg";
const LangButton = ({ type, isActive, onClick, elemType }) => {
  const IconType = useRef({
    HTML: <HtmlIcon height={28} width={28} />,
    JAVA: <JavaIcon height={25} width={28} />,
    REACT: <ReactIcon height={28} width={28} />,
  });

  return (
    <>
      {elemType === "BUTTON" ? (
        <Button isActive={isActive} onClick={onClick}>
          {type === "STYLED" ? (
            <img
              src={`${process.env.PUBLIC_URL}/image/styled-components.png`}
              alt="test"
            />
          ) : (
            <>{IconType.current[type]}</>
          )}
        </Button>
      ) : (
        <LangText isActive={isActive} type={type}>
          {type}
        </LangText>
      )}
    </>
  );
};
const ColorType = {
  JAVA: "orange",
  MYSQL: "BLUE",
  REACT: "SKYBLUE",
  JQuery: "PURPLE",
  AWS: "BLACK",
  SPRING: "GREEN",
};
const LangText = styled.div`
  width: max-content;
  font-weight: 500;
  background: #80808033;
  color: gray;
  ${({ isActive, type }) =>
    isActive &&
    css`
      color: white;
      background-color: ${ColorType[type]};
    `};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;

  &:hover {
    opacity: 80%;
  }
  img {
    width: 50px;
    height: 50px;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      box-shadow: inset 4px 4px 6px 0 #5e5e5e3d;
    `}
`;
export default LangButton;
