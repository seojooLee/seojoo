import React from "react";
import styled from "styled-components";

const Button = ({ onClick, value }) => {
  return <Container onClick={onClick}>{value}</Container>;
};

const Container = styled.div`
  width: 80%;
  height: 3rem;
  border: 1px solid white;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-weight: bolder;
  padding: 3px;
  user-select: none;
  box-shadow: 3px 3px 9px 0px #efefef;

  &:hover {
    background: #e6e6e6d1;
  }
`;

export default React.memo(Button);
