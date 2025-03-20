import "./styles/CVEducation.css";

const Education = () => {
  return (
    <section className="education">
      <h2 className="sectionTitle">Education</h2>
      <div className="educationContainer">
        <div>
          <h2 className="resumeTitle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"></path>
            </svg>{" "}
            Frontend-utvecklare
          </h2>

          <div className="resumeData">
            <span>Göteborg - Folkuniveritet </span>

            <span>2023 - 2025</span>

            <a
              href="Länk till ditt sterficat"
              target="_blank"
              className="resumeButtonLink"
            >
              View
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
              </svg>{" "}
            </a>
          </div>
        </div>

        <div>
          <h2 className="resumeTitle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"></path>
            </svg>
            Byggnadsingenjör
          </h2>

          <div className="resumeData">
            <span>Stockholm - Hermods </span>

            <span>2020 - 2022</span>

            <a
              href="Länk till ditt sterficat"
              target="_blank"
              className="resumeButtonLink"
            >
              View
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
              </svg>{" "}
            </a>
          </div>
        </div>

        <div>
          <h2 className="resumeTitle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"></path>
            </svg>{" "}
            Grundläggande Militär Utbildning (GMU)
          </h2>

          <div className="resumeData">
            <span>Karlskoga - Militär </span>

            <span>2018</span>

            <a
              href="Länk till ditt sterficat"
              target="_blank"
              className="resumeButtonLink"
            >
              View
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
              </svg>{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
