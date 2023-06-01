import axios from "axios";
import {
  Hero,
  TopBar,
  Loader,
  Projects,
  Seperator,
  SecondProjects,
  Contact,
} from "./components";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  // test:     https://api.npoint.io/8bddad89764b7decdc5c
  // official: https://api.npoint.io/fcdb9d7731617539cddf
  useEffect(() => {
    axios
      .get("https://api.npoint.io/fcdb9d7731617539cddf")
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
      <TopBar place={`start`} />
      <Hero data={data.heroSection} />
      <Projects data={data.projects} />
      <Seperator />
      <SecondProjects data={data.secondProjects} />
      <Seperator />
      <Contact data={data.contact} />
      <TopBar place={`end`} />
    </>
  );
}

export default App;
