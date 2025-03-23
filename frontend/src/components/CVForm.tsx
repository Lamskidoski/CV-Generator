import { useState } from "react";
import "./styles/CVForm.css";

// ✅ 1. Typer
type EducationEntry = {
  title: string;
  school: string;
  year: string;
};

type WorkEntry = {
  title: string;
  company: string;
  year: string;
};

type CVFormProps = {
  setCvData: (data: {
    name: string;
    email: string;
    about: string;
    work: WorkEntry[]; // ✅ Ändrat från experiences till work
    education: EducationEntry[];
    skills: string[];
  }) => void;
};

const CVForm = ({ setCvData }: CVFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    about: "",
    work: [] as WorkEntry[], // ✅ Bytt namn här
    education: [] as EducationEntry[],
    skills: [] as string[],
  });

  // ✅ State för utbildning
  const [eduTitle, setEduTitle] = useState("");
  const [eduSchool, setEduSchool] = useState("");
  const [eduYear, setEduYear] = useState("");

  // ✅ State för jobberfarenhet
  const [workTitle, setWorkTitle] = useState("");
  const [workCompany, setWorkCompany] = useState("");
  const [workYear, setWorkYear] = useState("");

  // ✅ State för skills
  const [newSkill, setNewSkill] = useState("");

  // 🔄 Input change handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Lägg till utbildning
  const handleAddEducation = () => {
    if (eduTitle && eduSchool && eduYear) {
      setFormData((prev) => ({
        ...prev,
        education: [
          ...prev.education,
          {
            title: eduTitle.trim(),
            school: eduSchool.trim(),
            year: eduYear.trim(),
          },
        ],
      }));
      setEduTitle("");
      setEduSchool("");
      setEduYear("");
    }
  };

  const handleRemoveEducation = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  // ✅ Lägg till jobb
  const handleAddJob = () => {
    if (workTitle && workCompany && workYear) {
      setFormData((prev) => ({
        ...prev,
        work: [
          ...prev.work,
          {
            title: workTitle.trim(),
            company: workCompany.trim(),
            year: workYear.trim(),
          },
        ],
      }));
      setWorkTitle("");
      setWorkCompany("");
      setWorkYear("");
    }
  };

  const handleRemoveJob = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      work: prev.work.filter((_, i) => i !== index),
    }));
  };

  // ✅ Lägg till skill
  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()],
      }));
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  // ✅ Skicka formuläret
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCvData(formData);
  };

  return (
    <form className="cv-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Namn"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <textarea
        name="about"
        placeholder="Om dig själv"
        value={formData.about}
        onChange={handleChange}
      />

      {/* ✅ Jobb-del */}
      <div className="workInputContainer">
        <input
          type="text"
          placeholder="Titel (t.ex. Reseledare)"
          value={workTitle}
          onChange={(e) => setWorkTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Företag (t.ex. Nordic Invasion AB)"
          value={workCompany}
          onChange={(e) => setWorkCompany(e.target.value)}
        />
        <input
          type="text"
          placeholder="År (t.ex. 2022–2024)"
          value={workYear}
          onChange={(e) => setWorkYear(e.target.value)}
        />
        <button type="button" onClick={handleAddJob}>
          Lägg till erfarenhet
        </button>
      </div>
      <ul className="workPreview">
        {formData.work.map((work, index) => (
          <li className="inputList" key={index}>
            {work.title}
            <br />
            {work.company}
            <br />
            {work.year}
            <button
              className="inputButton"
              type="button"
              onClick={() => handleRemoveJob(index)}
            >
              x
            </button>
          </li>
        ))}
      </ul>

      {/* ✅ Utbildning-del */}
      <div className="educationInputContainer">
        <input
          type="text"
          placeholder="Titel (t.ex. Byggnadsingenjör)"
          value={eduTitle}
          onChange={(e) => setEduTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Skola (t.ex. Hermods)"
          value={eduSchool}
          onChange={(e) => setEduSchool(e.target.value)}
        />
        <input
          type="text"
          placeholder="År (t.ex. 2020 - 2022)"
          value={eduYear}
          onChange={(e) => setEduYear(e.target.value)}
        />
        <button type="button" onClick={handleAddEducation}>
          Lägg till utbildning
        </button>
      </div>
      <ul className="educationPreview">
        {formData.education.map((edu, index) => (
          <li className="inputList" key={index}>
            {edu.title}
            <br />
            {edu.school}
            <br />
            {edu.year}
            <button
              className="inputButton"
              type="button"
              onClick={() => handleRemoveEducation(index)}
            >
              x
            </button>
          </li>
        ))}
      </ul>

      {/* ✅ Skills */}
      <div className="skillsInputContainer">
        <input
          type="text"
          placeholder="Lägg till en färdighet"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <button type="button" onClick={handleAddSkill}>
          Lägg till
        </button>
      </div>
      <ul className="skillsPreview">
        {formData.skills.map((skill, index) => (
          <li className="inputList" key={index}>
            {skill}
            <button
              className="inputButton"
              type="button"
              onClick={() => handleRemoveSkill(index)}
            >
              x
            </button>
          </li>
        ))}
      </ul>

      <button type="submit">Förhandsgranska CV</button>
    </form>
  );
};

export default CVForm;
