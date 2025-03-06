import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Mainpage from "./components/Mainpage";
import TheoryPage from "./components/TheoryPage";
import AnimationPage from "./components/AnimationPage";
import MathsQuiz from "./quiz/MathsQuiz";
import Procedure from "./components/Procedure";
import SelectLevel from "./components/SelectLevel";
import Exercise1 from "./components/Exercise1";
import Exercise2 from "./components/Exercise2";
import Exercise3 from "./components/Exercise3";
import Exercise4 from "./components/Exercise4";

function App() {
  const arr = [
    "Student will able to learn about the conversion of sentence from Passive voice to Active voice and vice versa.",
  ];

  return (
    <Routes>
      <Route exact path="/" element={<Homepage />}></Route>
      <Route exact path="/theory" element={<TheoryPage />}></Route>
      <Route exact path="/animation" element={<AnimationPage />}></Route>
      <Route exact path="/quiz" element={<MathsQuiz />}></Route>
      <Route exact path="/procedure" element={<Procedure />}></Route>
      <Route exact path="/letusverify" element={<Homepage />}></Route>
      <Route
        exact
        path="/launchpage/englishactivity"
        element={<SelectLevel />}
      ></Route>
      <Route
        exact
        path="/launchpage/englishactivity/exercise1"
        element={<Exercise1 />}
      ></Route>
      <Route
        exact
        path="/launchpage/englishactivity/exercise2"
        element={<Exercise2 />}
      ></Route>
      <Route
        exact
        path="/launchpage/englishactivity/exercise3"
        element={<Exercise3 />}
      ></Route>
      <Route
        exact
        path="/launchpage/englishactivity/exercise4"
        element={<Exercise4 />}
      ></Route>
    </Routes>
  );
}

export default App;
