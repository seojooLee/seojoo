import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/seojoo/") {
      navigate("/seojoo/home");
    }
  }, [location, navigate]);
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
  background-color: #252525;
`;

export default Layout;
