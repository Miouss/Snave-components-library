import styled from "styled-components";
import { ProjectsPrezCards as Cards } from "./ProjectsPrezCards";

export function ProjectsPrez() {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
  `;

  const ProjectDetail = styled.div`
    flex: 0.75;
    display: flex;
  `;

  const ProjectsSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #BEA28E;
  `;

  const CardsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 48px;
  `;

  return (
    <Container>
      <ProjectDetail></ProjectDetail>
      <ProjectsSection>
        <CardsGrid>
          <Cards number={8} />
        </CardsGrid>
      </ProjectsSection>
    </Container>
  );
}
