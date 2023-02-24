import { NavBar } from "./components";
import TopDiv from "./components/TopDiv";
import BottomDiv from "./components/BottomDiv";
import { useState, useEffect } from "react";

import "./styles/App.css";

function App() {
const [mock, setMock] = useState([])

  useEffect(() => {
    function mockApi () {
      fetch('https://dummyjson.com/products/')
      .then(result => result.json())
      .then(data => {
        setMock(data.products)
      })
      .catch((error) => console.log(error))
    }
    mockApi()
  }, [])

  return (
    <div className="App">
      <NavBar />
      <main>
        <TopDiv mock={mock}/>
        <BottomDiv mock={mock}/>
      </main>
    </div>
  );
}

export default App;
