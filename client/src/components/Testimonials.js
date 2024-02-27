import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  // Define your testimonial data
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO, Company ABC",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "testimonial.png", // Replace with actual image path
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Manager, XYZ Corp",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "testimonial.png", // Replace with actual image path
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-4 font-weight-bold">Testimonials</h1>
      <p className="text-center mt-3 mb-5">
        These are just a few of the services we offer. Contact us to learn more
        about our full range of services and how we can help your business
        succeed.
      </p>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="card bg-light p-4 border rounded"
          >
            <div className="media">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="mr-3 rounded-circle"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <div className="media-body">
                <p>{testimonial.content}</p>
                <p className="font-italic">
                  - {testimonial.name}, {testimonial.position}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
