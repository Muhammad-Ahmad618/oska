import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Testimonial() {
  const unique_id = Math.random().toString(36).substring(2, 9);
  const prevBtnClass = `custom-prev-${unique_id}`;
  const nextBtnClass = `custom-next-${unique_id}`;

  const testimonials = [
    {
      quote:
        "I like Portfolio Page more and more each day because it makes my life a lot easier. It fits our needs perfectly. Keep up the excellent work.",
      author: "John Smith",
      role: "UI & UX Designer",
      avatar: <FaUserCircle />,
    },
    {
      quote:
        "I like Portfolio Page more and more each day because it makes my life a lot easier. It fits our needs perfectly. Keep up the excellent work.",
      author: "David",
      role: "Graphic Designer",
      avatar: <FaUserCircle />,
    },
    {
      quote:
        "I like Portfolio Page more and more each day because it makes my life a lot easier. It fits our needs perfectly. Keep up the excellent work.",
      author: "Isaac",
      role: "Developer",
      avatar: <FaUserCircle />,
    },
    {
      quote:
        "I like Portfolio Page more and more each day because it makes my life a lot easier. It fits our needs perfectly. Keep up the excellent work.",
      author: "John Smith",
      role: "UI & UX Designer",
      avatar: <FaUserCircle />,
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white rounded-2xl relative">
      <button
        className={`${prevBtnClass} absolute left-5 sm:left-20 top-[74%] sm:top-[70%] -translate-y-1/2 z-10 group w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black transition`}
      >
        <IoIosArrowRoundBack className="text-[1.5rem] text-gray-700 group-hover:text-white" />
      </button>
      <button
        className={`${nextBtnClass} absolute right-5 sm:right-20 top-[74%] sm:top-[70%] -translate-y-1/2 z-10 group w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black transition`}
      >
        <IoIosArrowRoundForward className="text-[1.5rem] text-gray-700 group-hover:text-white" />
      </button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: `.${nextBtnClass}`,
          prevEl: `.${prevBtnClass}`,
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center p-8 rounded-2xl">
              <p className="text-[1.4rem] sm:text-[1.8rem] lg:text-[2rem] font-medium mb-6">“{t.quote}”</p>
              <div className="flex items-center gap-x-4 my-5">
                <span className="text-gray-300 text-[3rem]">{t.avatar}</span>
                <div className="text-start">
                  <h4 className="font-semibold text-gray-900 text-[1.1rem]">
                    {t.author}
                  </h4>
                  <span className="text-gray-500 text-xs">{t.role}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
