import { NavBar } from "./components";
import { useState, useEffect } from "react";
import { v1 as generateUniqueID } from "uuid";
import TopDiv from "./components/TopDiv";
import BottomDiv from "./components/BottomDiv";

import axios from "axios";

import "./styles/App.css";

function App() {
  const [mock, setMock] = useState([]);

  useEffect(() => {
    function mockApi() {
      axios
        .get("https://dummyjson.com/products/")
        .then((result) => {
          setMock(result.data.products);
        })
        .catch((error) => console.log(error));
    }
    mockApi();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <main>
        <TopDiv mock={mock} generateUniqueID={generateUniqueID} />
        <BottomDiv mock={mock} generateUniqueID={generateUniqueID} />
      </main>
    </div>
  );
}

export default App;
