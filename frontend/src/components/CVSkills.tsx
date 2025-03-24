import "./styles/CVSkills.css";
type SkillsProps = {
  skills: string[];
};

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section className="skills" id="skills">
      <h2 className="sectionTitle">SKILLS</h2>

      <div className="skillsContainer">
        <div className="skillsContent">
          <ul className="skillsList">
            {skills.length > 0 ? (
              skills.map((skill, index) => (
                <li className="resumeTitle" key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"></path>
                  </svg>
                  {skill}
                </li>
              ))
            ) : (
              <p className="noTitle">Inga färdigheter har angetts än.</p>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
