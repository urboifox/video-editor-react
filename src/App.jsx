import axios from "axios";
import {
  Hero,
  TopBar,
  Loader,
  Projects,
  Seperator,
  SecondProjects,
} from "./components";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.npoint.io/8bddad89764b7decdc5c")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <TopBar />
      <Hero data={data.heroSection} />
      <Projects data={data.projects} />
      <Seperator />
      <SecondProjects data={data.secondProjects} />
      <Seperator />
    </>
  );
}

export default App;
