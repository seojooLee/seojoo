import React, { useEffect, useState } from "react";
import { animated, useTransition } from "react-spring";
import styled from "styled-components";
import { useTimer } from "../utils/timerUtils";

const RSS = () => {
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const getRss = async (e) => {
    const res = await fetch(
      `https://api.allorigins.win/get?url=${"https://potential-coding.tistory.com/rss"}`
    );
    const { contents } = await res.json();
    const feed = new window.DOMParser().parseFromString(contents, "text/xml");
    const items = feed.querySelectorAll("item");
    const feedItems = [...items].map((el) => ({
      link: el.querySelector("link").innerHTML,
      title: el.querySelector("title").innerHTML,
      author: el.querySelector("author").innerHTML,
    }));
    setItems(feedItems);
  };

  useEffect(() => {
    getRss();
  }, []);

  useEffect(() => {
    if (items?.length > 0) {
      //   setTitleList(items.flatMap((e) => e.title));
      setActiveIndex(0);
    }
  }, [setActiveIndex, items]);

  useTimer(
    () => {
      setActiveIndex((activeIndex + 1) % items?.length);
    },
    3000,
    [activeIndex, items]
  );

  const topToBottom = {
    from: { transform: "translateY(-100%)" },
    enter: { transform: "translateY(0%)" },
    leave: { transform: "translateY(100%)" },
  };

  const transitions = useTransition(items[activeIndex] || null, {
    topToBottom,
    key: activeIndex,
  });

  return (
    <Wrapper className="App">
      {transitions((props, item) => {
        return (
          <animated.div key={props.key} style={props} className="title">
            <a href={item?.link}>{item?.title}</a>
          </animated.div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
  border-radius: 8px;
  padding: 10px 20px;
  .title {
    display: flex;
    flex: 1;
    font-size: 2rem;
  }
`;

export default RSS;
