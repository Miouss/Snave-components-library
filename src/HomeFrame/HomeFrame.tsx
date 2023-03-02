import styled from "styled-components";

const notMobile = "(min-width: 960px)";
const titleSize = "clamp(64px, 7vw, 128px)";

export function HomeFrame() {
  const Container = styled("div")`
    width: 100%;
    height: 100%;
    max-width: 1520px;

    display: flex;
    flex-direction: column;

    @media ${notMobile} {
      height: unset;
      width: 70%;
    }
  `;

  const Title = styled("h1")`
    height: 40%;
    display: flex;
    align-items: flex-end;

    justify-content: flex-start;
    margin: 0;
    font-family: Lato;
    font-size: ${titleSize};
    font-weight: 700;
    letter-spacing: 0em;
    white-space: nowrap;
  `;

  const SubContainer = styled("div")`
    flex: 1;
    color: white;
    background: #333333;
    @media ${notMobile} {
      padding-bottom: 64px;
    }
  `;

  const SubTitle = styled("h1")`
    margin: 0;
    font-size: ${titleSize};
    white-space: nowrap;
    margin-bottom: 40px;

    @media ${notMobile} {
      padding-left: clamp(37px, 5vw, 80px);
    }
  `;

  const Description = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-left: 32px;

    @media ${notMobile} {
      padding-left: clamp(41px, 5vw, 80px);
    }
  `;
  const ShortDesc = styled("h2")`
    margin: 0;
    padding: 0;

    font-family: Raleway;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
  `;
  const LongDesc = styled("p")`
    margin: 0;
    padding: 0;

    width: 80%;
    min-width: 200px;
    max-width: 400px;
    font-family: Raleway;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  `;

  const Color = styled("span")`
    color: ${(props) => props.color};
  `;

  return (
    <Container>
      <Title>They Call Me Evans</Title>
      <SubContainer>
        <SubTitle>But Call Me Snave</SubTitle>
        <Description>
          <ShortDesc>
            I <Color color="#BEA28E">design</Color>,{" "}
            <Color color="#D26443">code</Color> &{" "}
            <Color color="#93D243">draw</Color>
          </ShortDesc>

          <LongDesc>
            Based in south of France, i’m a multidisciplinary Designer trying to
            improve the lives of others through design and to learn new things
            everyday to enhanced this path.
          </LongDesc>
        </Description>
      </SubContainer>
    </Container>
  );
}
