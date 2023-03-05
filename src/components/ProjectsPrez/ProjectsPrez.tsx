import styled from "styled-components";
import { Cards as Cards } from "./Cards";
import { useState } from "react";
import { SMALL_PC, NORMAL_PC, TABLET } from "../..";

export interface SelectedProject {
  source: string;
  description: string;
}

export function ProjectsPrez() {
  const [selectedProject, setSelectedProject] = useState<SelectedProject>();

  const Container = styled.div`
    width: 100%;
    height: 100%;
    max-height: 620px;
    display: flex;
    ${TABLET} {
      display: none;
    }
  `;

  const ProjectDetail = styled.div`
    position: relative;
    flex: 0.95;
    display: flex;
  `;

  const SelectedProjectContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
  `;

  const Description = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: min(1vw, 1rem);
    transform: translateX(10%);
  `;

  const ImgSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const ImgContainer = styled.div`
    width: min(20vw, 280px);
    display: flex;
    justify-content: center;
    align-items: center;

    animation: scaleIn 0.5s ease-in-out forwards;

    @keyframes scaleIn {
      0% {
        transform: scale(0) translateX(50%);
      }
      100% {
        transform: scale(1) translateX(50%);
      }
    }
  `;

  const Img = styled.img`
    width: 100%;
    height: auto;
  `;

  const ProjectSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    overflow-y: scroll;
    overflow-x: hidden;
    background: #bea28e;
  `;

  const CardsGrid = styled.div`
    flex: 1;
    transform: translateX(13%);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 96px;
    row-gap: 48px;
  `;

  return (
    <Container>
      <ProjectDetail>
        <SelectedProjectContainer>
          {selectedProject && (
            <>
              <Description>{selectedProject.description}</Description>
              <ImgSection>
                <ImgContainer>
                  <Img src={selectedProject.source} />
                </ImgContainer>
              </ImgSection>
            </>
          )}
        </SelectedProjectContainer>
      </ProjectDetail>
      <ProjectSection>
        <CardsGrid>
          <Cards setSelectedProject={setSelectedProject} />
        </CardsGrid>
      </ProjectSection>
    </Container>
  );
}
