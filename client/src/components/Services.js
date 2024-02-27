import React from "react";

const Service = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-3" style={{ fontWeight: "bold" }}>
        Services
      </h1>
      <p className="mt-3 mb-5 text-center">
      These are just a few of the services we offer. Contact us to learn more
        about our full range of services and how we can help your business
        succeed.These are just a few of the services we offer. Contact us to learn more
        about our full range of services and how we can help your business
        succeed.
      </p>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card" style={{ backgroundColor: "#f3f3f3" }}>
            <img
              src="icon.png"
              className="card-img-top"
              alt="Web Design"
              style={{ height: "100px", width: "100px", padding: "10px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Web Design</h5>
              <p className="card-text">
                We offer professional web design services to help you create
                stunning and user-friendly websites for your business.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card" style={{ backgroundColor: "#f3f3f3" }}>
            <img
              src="icon2.png"
              className="card-img-top"
              alt="Web Development"
              style={{ height: "90px", width: "110px", padding: "10px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">
                Our team of experienced developers can build custom web
                applications tailored to your specific business needs.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card" style={{ backgroundColor: "#f3f3f3" }}>
            <img
              src="icon3.png"
              className="card-img-top"
              alt="SEO Optimization"
              style={{ height: "100px", width: "70px", padding: "10px" }}
            />
            <div className="card-body">
              <h5 className="card-title">SEO Optimization</h5>
              <p className="card-text">
                Improve your website's search engine visibility and drive
                organic traffic with our SEO optimization services.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card" style={{ backgroundColor: "#f3f3f3" }}>
            <img
              src="icon.png"
              className="card-img-top"
              alt="Web Design"
              style={{ height: "100px", width: "100px", padding: "10px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Web Design</h5>
              <p className="card-text">
                We offer professional web design services to help you create
                stunning and user-friendly websites for your business.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card" style={{ backgroundColor: "#f3f3f3" }}>
            <img
              src="icon2.png"
              className="card-img-top"
              alt="Web Development"
              style={{ height: "90px", width: "110px", padding: "10px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">
                Our team of experienced developers can build custom web
                applications tailored to your specific business needs.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card" style={{ backgroundColor: "#f3f3f3" }}>
            <img
              src="icon3.png"
              className="card-img-top"
              alt="SEO Optimization"
              style={{ height: "100px", width: "70px", padding: "10px" }}
            />
            <div className="card-body">
              <h5 className="card-title">SEO Optimization</h5>
              <p className="card-text">
                Improve your website's search engine visibility and drive
                organic traffic with our SEO optimization services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
