import React, { useState } from "react";
import styled from "styled-components";
import { animated, useSpring, useTrail } from "@react-spring/web";
import { useNavigate } from "react-router-dom";

const Introduce = () => {
  // const introRef = [
  //   "",
  // ];

  const navigate = useNavigate();
  const styles = useSpring({
    from: "rotate(0deg)",
    to: "rotate(348deg)",
  });
  const tryRef = [
    "- 농도있는 삽질을 하고, 안되면 물어보자",
    "- 내가 깨우친 것들을 기록하는 습관을 가지자",
    "- 업무와 진척도를 공유하는 태도를 가지자",
    "- 업무함에 있어 우선순위를 파악하자",
    "- 안다는 선에서 끝나지 말고, 깊숙이 파고들자",
    "- 중복된 코드를 최소화하자",
  ];
  const config = { mass: 5, tension: 2000, friction: 200 };

  const [toggle, set] = useState(true);
  const trail = useTrail(tryRef.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 10,
    height: toggle ? 30 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  const { x } = useSpring({
    from: { x: 0 },
    to: { x: 1 },
  });
  return (
    <Container>
      <animated.div
        style={{
          transform: x
            .interpolate({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [180, 220, 180, 220, 180, 220, 180, 200],
            })
            .interpolate((x) => `translate3d(${x}px, 0px, 0px)`),
        }}
      ></animated.div>
      <IntroBox>
        <img src={process.env.PUBLIC_URL + "/image/hello.png"} alt="img" />
        <Title>
          안녕하세요. 프론트에 백엔드 한방울 섞은 개발자 이서주입니다.
        </Title>
        저는 카멜레온처럼 주변 환경에 맞춰서 빠르게 적응하는 것이 저의 장점이라
        생각해요.
        <br /> 새로운 언어와 트렌드도 경계없이 수용하는 마음을 가지고 있습니다.
        <br /> 제 주변사람들은 저를 주로 “<span>이해력</span>이 빠르다” “
        <span>일을 찾아서</span> 한다” “<span>책임과 끈기가</span> 강하다”라고
        지칭해요. 저는 항상 더 나은 개발자가 되기위해 노력하고 있습니다. 현재는
        중복된 코드를 최소화하는데 집중하고 있습니다.
      </IntroBox>
      <IntroBox>
        <Title className="trails-main" onClick={() => set((state) => !state)}>
          더 나은 개발자가 되기 위한 노력들
        </Title>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={tryRef[index]}
            className="trails-text"
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <animated.div style={{ height }}>{tryRef[index]}</animated.div>
          </animated.div>
        ))}
      </IntroBox>
      <Button onClick={() => navigate("/seojoo/about/edu")}>다음으로</Button>
      <BackgroundAnimation />
    </Container>
  );
};

function BackgroundAnimation() {
  const props = useSpring({
    from: {
      left: "0%",
      top: "0%",
      width: "100%",
      height: "100%",
      background: "#5e7bff4f",
      position: "absolute",
      zIndex: -1,
    },
    to: async (next) => {
      while (1) {
        await next({
          left: "0%",
          top: "0%",
          width: "100%",
          height: "100%",
          background: "rgba(255,178,522,0.8)",
        });
        await next({
          height: "50%",
          background: "rgba(15,178,522,0.8)",
          border: "3px solid white",
        });
        await next({
          width: "50%",
          left: "50%",
          background: "rgba(212,225,311,0.8)",
        });
        await next({
          top: "0%",
          height: "100%",
          background: "rgba(178,128,122,0.8)",
        });
        await next({ top: "50%", height: "100%", background: "lightsalmon" });
        await next({ width: "100%", left: "0%", background: "lightcoral" });
        await next({ width: "50%", background: "lightseagreen" });
        await next({ top: "0%", height: "100%", background: "lightskyblue" });
        await next({ width: "100%", background: "lightslategrey" });
      }
    },
  });
  return <animated.div className="script-box" style={props} />;
}

const Title = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;
  padding-bottom: 4px;
`;

const Button = styled.button`
  font-weight: 400;
  padding: 15px;
  font-size: 1rem;
  background-color: white;
  border: 1px solid skyblue;
  margin: 10px;

  &:hover {
    opacity: 80%;
    transition: 0.3s all;
  }
`;

const IntroBox = styled.div`
  align-items: center;
  line-height: 28px;
  width: 750px;
  background: white;
  white-space: normal;
  box-shadow: 2px 2px 0px 0px #efefef;
  padding: 30px 80px;
  margin-bottom: 1px;
  img {
    width: 40%;
  }

  span {
    background-color: #ffeb3ba3;
    font-weight: 500;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  white-space: pre-line;
  font-family: "NanumSquare";
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export default Introduce;
