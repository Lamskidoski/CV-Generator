import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useState } from "react";
// import CVForm from "./components/CVForm";
// import CVPreview from "./components/CVPreview";
// import CVDownload from "./components/CVDownload";
import "./App.css";
import Header from "./components/CVHeader";
import Main from "./components/CVMain";
import About from "./components/CVAbout";
import Skills from "./components/CVSkills";
import Education from "./components/CVEducation";

const App = () => {
  // State för att lagra CV-information
  // const [cvData, setCvData] = useState({
  //   name: "",
  //   email: "",
  //   experiences: "",
  //   education: "",
  // });

  return (
    <div className="app-container">
      <Router>
        {/* <Header /> */}
        <Main />
        <About />
        <Skills />
        <Education />
        <Routes>
          <Route path="/" element={<h2></h2>} />
          {/* <Route path="/cv" element={<h2>Mitt CV</h2>} /> */}
          {/* <Route path="/kontakt" element={<h2>Kontakt</h2>} /> */}
        </Routes>
      </Router>
      {/* <h1>CV Generator</h1> */}

      {/* Formulär där användaren fyller i sin information */}
      {/* <CVForm setCvData={setCvData} /> */}

      {/* Förhandsvisning av CV med den ifyllda informationen */}
      {/* <CVPreview data={cvData} /> */}

      {/* Knapp för att generera och ladda ner PDF */}
      {/* <CVDownload data={cvData} /> */}
    </div>
  );
};

export default App;
