"use client";

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TestimonialCard from "../components/TestimonialCard";

interface Testimonial {
  id: string;
  rating: number;
  text: string;
  clientName: string;
  jobTitle: string;
  profileImage: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    rating: 5,
    text: "Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.",
    clientName: "Robert Fox",
    jobTitle: "UI/UX Designer",
    profileImage: "/api/placeholder/48/48",
  },
  {
    id: "2",
    rating: 5,
    text: "Mauris eget lorem odio. Mauris convallis justo molestie metus aliquam lacinia. Suspendisse ut dui vulputate augue condimentum ornare. Morbi vitae tristique ante",
    clientName: "Bessie Cooper",
    jobTitle: "Creative Director",
    profileImage: "/api/placeholder/48/48",
  },
  {
    id: "3",
    rating: 5,
    text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse et magna quis nibh accumsan venenatis sit amet id orci. Duis vestibulum bibendum dapibus.",
    clientName: "Jane Cooper",
    jobTitle: "Photographer",
    profileImage: "/api/placeholder/48/48",
  },
  {
    id: "4",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    clientName: "John Smith",
    jobTitle: "Software Engineer",
    profileImage: "/api/placeholder/48/48",
  },
  {
    id: "5",
    rating: 5,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    clientName: "Sarah Johnson",
    jobTitle: "Marketing Manager",
    profileImage: "/api/placeholder/48/48",
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 3,
      spacing: 10,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  // Helper function to get slides per view
  const getSlidesPerView = (): number => {
    if (!instanceRef.current?.options.slides) return 3;
    const slidesConfig = instanceRef.current.options.slides;
    if (typeof slidesConfig === 'object' && 'perView' in slidesConfig) {
      return typeof slidesConfig.perView === 'number' ? slidesConfig.perView : 3;
    }
    return 3;
  };
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Clients Testimonial
          </h2>
        </header>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="keen-slider__slide">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  instanceRef.current?.prev();
                }}
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  instanceRef.current?.next();
                }}
                disabled={
                  currentSlide === getSlidesPerView() - 1
                }
              />
            </>
          )}
        </div>
        {loaded && instanceRef.current && (
          <div className="flex justify-center gap-2 mt-8">
            {[
              ...Array(
                Math.max(
                  1,
                  testimonials.length - getSlidesPerView() + 1
                )
              ).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === idx ? "bg-blue-500 w-10" : "bg-blue-300"
                  }`}
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const disabled = props.disabled;
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={`w-10 h-10 flex items-center justify-center bg-white shadow-md hover:bg-blue-100 transition-colors duration-200
        ${props.left ? "-left-20" : "-right-20"}
        ${disabled}
        cursor-pointer absolute top-1/2 -translate-y-1/2
        ${disabled ? "opacity-50 hover:bg-white hover:cursor-default" : ""}
      `}
      aria-label={props.left ? "Anterior" : "Siguiente"}
      type="button"
      tabIndex={0}
    >
      {props.left ? (
        // Flecha izquierda
        <ArrowBackIcon className="text-blue-500" fontSize="medium" />
      ) : (
        // Flecha derecha
        <ArrowForwardIcon className="text-blue-500" fontSize="medium" />
      )}
    </button>
  );
}

export default TestimonialsSection;
