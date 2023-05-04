import { useState } from "react";
import Header from "./components/header/Header";
import Products from "./components/products/Products";

const App = () => {
  const [para, setPara] = useState(2000000);

  return (
    <>
      <Header para={para} />
      <Products />
    </>
  );
};

export default App;
