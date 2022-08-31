import React from "react";
import styled from "styled-components";
import { animated } from "react-spring";
const Introduce = () => {
  const introRef = [
    "안녕하세요. ",
    "저는 카멜레온처럼 주변 환경에 맞춰 빠르게 적응하는 것이 저의 장점이라고 생각해요. \n 새로운 언어와 트렌드도 경계없이 수용하는 마음을 가지고 있습니다.",
  ];
  const introRef = [
    "안녕하세요. ",
    "저는 카멜레온처럼 주변 환경에 맞춰 빠르게 적응하는 것이 저의 장점이라고 생각해요. \n 새로운 언어와 트렌드도 경계없이 수용하는 마음을 가지고 있습니다.",
  ];
  return (
    <Container>
      {introRef.map((item) => {
        return <animated.h1>{item}</animated.h1>;
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  font-size: 0.6rem;
`;
const Image = styled.img`
  width: 400px;
  &:hover {
    transition: 3s ease-in-out;
  }
`;
export default Introduce;
