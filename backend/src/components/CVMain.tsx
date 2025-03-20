import "./styles/CVMain.css";

const Main = () => {
  return (
    <main className="CVMain">
      <section className="home">
        <div className="homeContainer">
          <h1 className="homeName">
            HELLO, I'M <br />
            Lam Ky
          </h1>
          <div className="homeBlob">
            <div className="HomeProfile">
              <img
                src="src/assets/img.jpeg"
                alt="home Img"
                className="homeImg"
              />
            </div>

            <div>{/* svg */}</div>

            <h1 className="homeProfession">
              FRONTEND <br />
              DEVELOPER
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
