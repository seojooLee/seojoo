import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

const Header = () => {
  const categoryRef = useRef([
    { id: "seojoo", value: "Home" },
    { id: "about", value: "About" },
    { id: "blog", value: "Blog" },
    { id: "portfolio", value: "Portfolio" },
    { id: "contact", value: "Contact" },
  ]);
  const location = useLocation();

  return (
    <Container>
      <div className="logo">
        <img src={process.env.PUBLIC_URL + "/image/logo.png"} alt="no_logo" />
      </div>
      <div className="category">
        {categoryRef.current.map((item, index) => {
          const isActive = location.pathname.indexOf(item.id) !== -1;
          return <Item isActive={isActive}>{item.value}</Item>;
        })}
      </div>
    </Container>
  );
};

const Item = styled.div`
  width: 90px;
  text-align: center;

  ${({ isActive }) =>
    isActive &&
    css`
      color: white;
      text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #fff,
        0 0 82px #fff, 0 0 92px #fff, 0 0 102px #fff, 0 0 151px #fff;
    `}
  &:hover {
    font-weight: 700;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 60px;
  align-items: center;
  padding: 10px 2rem;
  border-bottom: 1px solid gray;
  box-shadow: 13px 20px 20px 4px #00000033;

  display: flex;
  justify-content: space-between;
  user-select: none;
  background-color: #252525;
  color: whitesmoke;
  .logo {
    flex: 1;
    font-size: 1.3rem;
    cursor: pointer;

    img {
      width: 4rem;
    }
  }

  .category {
    display: flex;
    cursor: pointer;
  }
`;

export default Header;
