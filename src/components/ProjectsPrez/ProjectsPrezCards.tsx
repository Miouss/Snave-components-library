import Project from "./project.svg";

export function ProjectsPrezCards({ number }: { number: number }) {
  const cards = [];

  for (let i = 0; i < number; i++) {
    cards.push(
      <div key={number} style={{
        width: "140px",
      }}>
        <img src={Project} alt="Project" style={{ width: "100%", height: "auto"
        }}/>
      </div>
    );
  }

  return <>{cards}</>;
}
