import "./styles/CVEducation.css";
type EducationEntry = {
  title: string;
  school: string;
  year: string;
};

type EducationProps = {
  education: EducationEntry[];
};

const Education = ({ education }: EducationProps) => {
  return (
    <section className="education">
      <h2 className="sectionTitle">Utbildning</h2>
      <div className="educationContainer">
        {education.length > 0 ? (
          education.map((edu, index) => (
            <div className="educationInput" key={index}>
              <h2 className="resumeTitle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z" />
                </svg>{" "}
                {edu.title}
              </h2>
              <div className="resumeData">
                <span>
                  {edu.school} | {edu.year}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="noTitle">Ingen utbildning har angetts än.</p>
        )}
      </div>
    </section>
  );
};

export default Education;
