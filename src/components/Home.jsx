/* eslint-disable react/prop-types */
import { Hero, Projects, Seperator, SecondProjects, Contact } from "./";
const Home = ({ data }) => {
  return (
    <>
      <Hero data={data.heroSection} />
      <Projects data={data.projects} />
      <Seperator />
      <SecondProjects data={data.secondProjects} />
      <Seperator />
      <Contact data={data.contact} />
    </>
  );
};

export default Home;
