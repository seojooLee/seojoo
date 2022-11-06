import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default Layout;
