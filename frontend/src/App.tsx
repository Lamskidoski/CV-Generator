import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import CVForm from "./components/CVForm";
// import CVPreview from "./components/CVPreview";
// import CVDownload from "./components/CVDownload";
import "./App.css";
import Header from "./components/CVHeader";
import Main from "./components/CVMain";
import About from "./components/CVAbout";
import Skills from "./components/CVSkills";
import Education from "./components/CVEducation";
import Work from "./components/CVWork";
import Footer from "./components/CVFooter";

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
  const [cvData, setCvData] = useState({
    name: "",
    about: "",
    phone: "",
    email: "",
    skills: [] as string[],
    education: [] as EducationEntry[],
    work: [] as WorkEntry[],
  });

  return (
    <div className="app-container">
      <Router>
        <Header />
        <CVForm setCvData={setCvData} />
        <Main name={cvData.name} />
        <About about={cvData.about} />
        <Skills skills={cvData.skills} />
        <Work work={cvData.work} />
        <Education education={cvData.education} />
        <Footer email={cvData.email} phone={cvData.phone} />
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
