import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";
import CVDownload from "./components/CVDownload";
import "./App.css";
import Header from "./components/CVHeader";
import Main from "./components/CVMain";
import About from "./components/CVAbout";
import Skills from "./components/CVSkills";
import Education from "./components/CVEducation";
import Work from "./components/CVWork";
import Footer from "./components/CVFooter";

// ✅ Typ för jobberfarenhet
type WorkEntry = {
  title: string;
  company: string;
  year: string;
};

type EducationEntry = {
  title: string;
  school: string;
  year: string;
};

const App = () => {
  // ✅ Uppdaterad state med work (istället för experiences)
  const [cvData, setCvData] = useState({
    name: "",
    about: "",
    email: "",
    skills: [] as string[],
    education: [] as EducationEntry[],
    work: [] as WorkEntry[], // ✅ Här läggs arbeten in
  });

  return (
    <div className="app-container">
      <Router>
        <Header />
        {/* Formulär där användaren fyller i sin information */}
        <CVForm setCvData={setCvData} />
        <Main />
        <About />
        <Skills skills={cvData.skills} />
        <Work work={cvData.work} />
        <Education education={cvData.education} />
        <Footer />
        <Routes>
          <Route path="/" element={<h2></h2>} />
        </Routes>
      </Router>

      {/* <CVPreview data={cvData} /> */}
      {/* <CVDownload data={cvData} /> */}
    </div>
  );
};

export default App;
