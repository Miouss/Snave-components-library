import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { SelectedProject } from "./ProjectsPrez";
import { SMALL_PC, NORMAL_PC } from "../..";

interface Props {
  project: SelectedProject;
  setSelectedProject: Dispatch<SetStateAction<SelectedProject | undefined>>;
}

export function Card({ project, setSelectedProject }: Props) {
  const Card = styled.div`
    width: 8vw;
    display: flex;
    justify-content: center;
    align-items: center;
    ${NORMAL_PC} {
      width: 6vw;
    }
  `;

  const CardImg = styled.img`
    width: 100%;
    height: auto;
  `;

  return (
    <Card>
      <CardImg src={project.source} alt="Project" onClick={() => setSelectedProject(project)} />
    </Card>
  );
}
