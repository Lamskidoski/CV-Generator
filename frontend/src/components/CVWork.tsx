import "./styles/CVWork.css";
type WorkEntry = {
  title: string;
  company: string;
  year: string;
};

type WorkProps = {
  work: WorkEntry[];
};

const Work = ({ work }: WorkProps) => {
  return (
    <section className="Work">
      <h2 className="sectionTitle">Work</h2>

      <div className="WorkContainer">
        {work.length > 0 ? (
          work.map((work, index) => (
            <div className="workInput" key={index}>
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
                {work.company}
              </h2>

              <div className="resumeData">
                <span>
                  {work.title} | {work.year}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="noTitle">Inga jobberfarenheter tillagda ännu.</p>
        )}
      </div>
    </section>
  );
};

export default Work;
