import Container from "../components/Container/container";
import Portfolio from "../components/Portfolio/portfolio"
import projects from "../projects"

function PortfolioPage() {
  document.title = "Portfolio";

  /* A list of rows with 1-2 projects in each */
  const createRows = () => {
    let rows = []

    for (let i = 0; i < projects.length; i += 2) {
      rows.push(<Portfolio key={projects[i].id} projectA={projects[i]} projectB={projects[i + 1]} />);
    }

    return rows;
  };

  return (
    <Container>
      <section className="pb-2">
        <h1 className="section-header">Portfolio</h1>
        <hr />
        {createRows()}
      </section>
    </Container>
  );
}

export default PortfolioPage;