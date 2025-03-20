// import { useState } from 'react';
// import axios from 'axios';
// import '../styles/CVForm.css';

// const CVForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         experiences: '',
//         education: '',
//     });

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         await axios.post('http://localhost:5173/api/cv', formData);
//     };

//     return (
//         <form className="cv-form" onSubmit={handleSubmit}>
//             <input type="text" name="name" placeholder="Namn" value={formData.name} onChange={handleChange} required />
//             <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//             <textarea name="experiences" placeholder="Erfarenheter" value={formData.experiences} onChange={handleChange} />
//             <textarea name="education" placeholder="Utbildning" value={formData.education} onChange={handleChange} />
//             <button type="submit">Generera CV</button>
//         </form>
//     );
// };

// export default CVForm;

import { useState } from "react";
import "./styles/CVForm.css";

type CVFormProps = {
  setCvData: (data: {
    name: string;
    email: string;
    experiences: string;
    education: string;
  }) => void;
};

const CVForm = ({ setCvData }: CVFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experiences: "",
    education: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCvData(formData);
  };

  return (
    <form className="cv-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Namn" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <textarea name="experiences" placeholder="Erfarenheter" value={formData.experiences} onChange={handleChange} />
      <textarea name="education" placeholder="Utbildning" value={formData.education} onChange={handleChange} />
      <button type="submit">Förhandsgranska CV</button>
    </form>
  );
};

export default CVForm;
