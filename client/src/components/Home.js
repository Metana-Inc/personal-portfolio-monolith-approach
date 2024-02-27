import React from "react";

const Home = () => {
  return (
    <section id="about" style={{ paddingTop: "100px", paddingBottom: "50px" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="about-me">
              <div className="aboutHorizontalLine"></div>
              <h1 style={{ fontSize: 24 }}>Hi, I am</h1>
              <h1 style={{ color: "orange", fontSize: 32 }}>Maverick Edward</h1>
              <h3 style={{ fontSize: 80, fontWeight: "bold" }}>UI & UX </h3>
              <h3
                style={{
                  fontSize: 80,
                  fontWeight: "bold",
                  paddingLeft: "200px",
                }}
              >
                Designer
              </h3>
              <p
                style={{
                  fontSize: 21,
                  fontWeight: "initial",
                  textAlign: "justify",
                }}
              >
                I enjoy creating things that live on the internet, whether that
                be websites, applications, or anything in between. My goal is to
                always build products that provide pixel-perfect, performant
                experiences.
              </p>
            </div>
          </div>
          <div className="col-md-6 pl-5">
            <div className="aboutMeImg">
              <img src="/about.png" alt="about me" style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
