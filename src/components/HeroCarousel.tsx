import React from "react";
import { Splide, SplideSlide, SplideProps } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const HeroCarousel: React.FC = () => {
  const options: SplideProps["options"] = {
    type: "loop",
    autoplay: true,
    interval: 3000, // Interval for autoplay (3000ms = 3s)
    pauseOnHover: false, // Determines if autoplay pauses on hover
    pauseOnFocus: false, // Determines if autoplay pauses on focus
    arrows: false, // Hide the navigation arrows
  };

  const images = [
    {
      src: "https://img.freepik.com/free-photo/futuristic-set-with-dj-charge-music-using-virtual-reality-glasses_23-2151431385.jpg?t=st=1716038153~exp=1716041753~hmac=3aec715aedb2c14a14678ef9bcfc9bfe6b8e19e5ed76ed9dec5b3f3b50d5b40c&w=1380",
      alt: "Image 1",
    },
    {
      src: "https://img.freepik.com/free-photo/musician-playing-electric-guitar_23-2151414214.jpg?t=st=1716038025~exp=1716041625~hmac=aca9e91a2ace6ddc734b9b1d7fa9e5ee154b523e9f8e36d0393b5cf63cca7b72&w=1380",
      alt: "Image 2",
    },
    {
      src: "https://img.freepik.com/free-photo/musician-playing-electric-guitar_23-2151414290.jpg?t=st=1716038198~exp=1716041798~hmac=b0630aa7598553eeef846feb8a92a4f972d42c5e6bf8011c922e96525fb4e841&w=1380",
      alt: "Image 3",
    },
    {
      src: "https://img.freepik.com/free-photo/view-futuristic-person-listening-music-headphones_23-2151072895.jpg?t=st=1716038454~exp=1716042054~hmac=1516cf7139ef3d609a719cc5088dd3a68ccd14471bf4ad8c9b5fa58694455a73&w=1480",
      alt: "Image 4",
    },
    {
      src: "https://img.freepik.com/free-photo/cyberpunk-woman-warrior-portrait_23-2150712548.jpg?t=st=1716038798~exp=1716042398~hmac=1d46ae216fb8c4555d941a4aad25c4946ca311886339a3a9b160b3e294e70df3&w=1480",
      alt: "Image 5",
    },
  ];

  return (
    <div className="mx-6 py-4">
      <Splide aria-label="My Favorite Images" options={options}>
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="h-[400px] w-full rounded-lg object-cover object-top"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default HeroCarousel;
