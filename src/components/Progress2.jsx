import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define image data with captions
const cardsData = [
  { img: "/projects/u11.jpeg", caption: "AutoCad Design Engineering" },
  { img: "/projects/u1.jpeg", caption: "Fullstack Web Dashboard UI" },
  { img: "/projects/u2.jpeg", caption: "React + Node Deployment Setup" },
  { img: "/projects/u3.jpeg", caption: "Responsive Admin Panel" },
  { img: "/projects/u4.jpeg", caption: "Frontend UI Components" },
  { img: "/projects/u5.jpeg", caption: "REST API Integration Sample Django/Python" },
  { img: "/projects/u6.jpeg", caption: "Authentication System also in Django/Python" },
  { img: "/projects/u7.jpeg", caption: "Animated Landing Page" },
  { img: "/projects/u8.jpeg", caption: "MERN Stack Ecommerce" },
  { img: "/projects/u9.jpeg", caption: "Real-time Chat UI" },
  { img: "/projects/u10.jpeg", caption: "Portfolio Frontend Design" },
];

export const Progress2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <section className="w-full bg-black text-white py-10 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Top sample Services recently...
        </h1>

        <div className="slider-container">
          <Slider {...settings}>
            {cardsData.map((card, index) => (
              <div key={index}>
                <div className="flex flex-col justify-center items-center h-[350px] sm:h-[450px] md:h-[550px]">
                  <img
                    src={card.img}
                    alt={`Slide ${index + 1}`}
                    className="object-contain max-h-[80%] max-w-full rounded-md"
                  />
                  <p className="mt-4 text-sm sm:text-base text-center text-gray-300">
                    {card.caption}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
