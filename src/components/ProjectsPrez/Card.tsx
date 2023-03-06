import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { SelectedProject } from "./ProjectsPrez";

interface Props {
  project: SelectedProject;
  setSelectedProject: Dispatch<SetStateAction<SelectedProject | undefined>>;
}

export function Card({ project, setSelectedProject }: Props) {
  const Card = styled.div`
    flex: calc(25% - 10px);
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const CardContainer = styled.div`
    width: 100px;
  `;

  const CardImg = styled.img`
    width: 100%;
    height: auto;
  `;

  return (
    <Card>
      <CardContainer>
        <CardImg
          src={project.source}
          alt="Project"
          onClick={() => setSelectedProject(project)}
        />
      </CardContainer>
    </Card>
  );
}
