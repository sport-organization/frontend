import "./App.css";
import "./index.css";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/Pages/Main/HomePage";
import TrainPage from "./components/Pages/TrainingsPage/Training";
import Stats from "./components/Pages/Stats/Stats";

function App() {
  return (
    <>
      <Routes>
           <Route path="/" element={<Layout />}>
             <Route path="/homepage" element={<HomePage />} />
             <Route path="/trainings" element={<TrainPage />} />
             <Route path="/stats" element={<Stats />} />
           </Route>
         </Routes>
    </>
  );
}

export default App;
