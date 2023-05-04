import { useState } from "react";
import Header from "./components/header/Header";

const App = () => {
  const [para, setPara] = useState(2000000);

  return (
    <>
      <Header para={para} />
    </>
  );
};

export default App;
