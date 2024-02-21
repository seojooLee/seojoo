import React from "react";
import { FlexTable } from "./EduPage";
import styled from "styled-components";
const ProjectPage = () => {
  return (
    <FlexTable>
      <Card>오즈의 마법사</Card>
      <Card>네레이터</Card>
    </FlexTable>
  );
};

const Card = styled.div``;

export default ProjectPage;
