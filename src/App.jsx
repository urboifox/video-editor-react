import axios from "axios";
import { TopBar, Loader, Home, Imprint } from "./components";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
    <BrowserRouter>
      <TopBar />

      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/imprint" element={<Imprint data={data.imprint} />} />
      </Routes>

      <TopBar />
    </BrowserRouter>
  );
}

export default App;
