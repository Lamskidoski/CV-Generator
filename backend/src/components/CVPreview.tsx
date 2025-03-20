import "./styles/CVPreview.css";

type CVPreviewProps = {
  data: {
    name: string;
    email: string;
    experiences: string;
    education: string;
  };
};

const CVPreview = ({ data }: CVPreviewProps) => {
  return (
    <div className="cv-preview">
      <h2>{data.name || "Ditt namn här"}</h2>
      <p>{data.email || "dinemail@example.com"}</p>
      <h3>Erfarenheter</h3>
      <p>{data.experiences || "Dina arbetserfarenheter..."}</p>
      <h3>Utbildning</h3>
      <p>{data.education || "Din utbildning..."}</p>
    </div>
  );
};

export default CVPreview;
