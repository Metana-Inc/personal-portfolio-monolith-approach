import React from "react";

const About = () => {
  return (
    <section id="about" style={{ paddingTop: "100px", paddingBottom: "50px" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 pl-5">
            <div className="aboutMeImg">
              <img
                src="/about-person.png"
                alt="about me"
                style={{ width: "80%" }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-me">
              <h3 style={{ fontSize: 60, fontWeight: "bold",paddingBottom:"20px" }}>About Me</h3>
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
              <div>
                <div className="mb-3">
                  <span style={{fontWeight:"bold"}}>HTML</span>
                  <div className="progress" style={{ width: "100%" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "80%", backgroundColor: "#ff6300" }}
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="mb-3">
                  <span style={{fontWeight:"bold"}}>CSS</span>
                  <div className="progress" style={{ width: "100%" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "50%", backgroundColor: "#ff6300" }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="mb-3">
                  <span style={{fontWeight:"bold"}}>JavaScript</span>
                  <div className="progress" style={{ width: "100%" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "100%", backgroundColor: "#ff6300" }}
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="mb-3">
                  <span style={{fontWeight:"bold"}}>React</span>
                  <div className="progress" style={{ width: "100%" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "90%", backgroundColor: "#ff6300" }}
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
