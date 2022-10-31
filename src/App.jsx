import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content2 from "./Components/Content2/Content2";
import Layout from "./Layout/Layout";
import HomePage from "./Page/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/Content2" element={<Content2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
