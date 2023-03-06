import styled from "styled-components";
import { Cards as Cards } from "./Cards";
import { useState } from "react";
import { TABLET } from "../..";

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
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    padding: 24px;
  `;

  const Description = styled.div`
    flex: 1;
    min-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  `;

  const ImgSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    
    animation: scaleIn 0.5s ease-in-out forwards;

    @keyframes scaleIn {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
  `;

  const ImgContainer = styled.div`
    width: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Img = styled.img`
    width: 100%;
    height: auto;
  `;

  const ProjectSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;

    background: #bea28e;
  `;

  const CardsGrid = styled.div`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 10px;
    row-gap: 48px;
    padding: 80px 100px;

    overflow-y: scroll;
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
